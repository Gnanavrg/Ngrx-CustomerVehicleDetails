import { Injectable } from "@angular/core";
import { createEffect, ofType, Actions } from "@ngrx/effects";
import { catchError, filter, map, mergeMap, Observable, of, switchMap, withLatestFrom } from "rxjs";
import { CustomerDetailsModel } from "src/app/models/customer-details.model";
import { CustomervehicledetailsService } from "src/app/services/customervehicledetails.service";
import { addItem, addItemSuccess, deleteItem, deleteItemSuccess, dummyAction, loadData, loadDataFailure, loadDataSuccess, updateItem, updateItemSuccess } from "../actions/vehicledetails.actions";
import { ROUTER_NAVIGATION, RouterNavigatedAction } from "@ngrx/router-store"
import { Store } from "@ngrx/store";
import { getData } from "../selector/vehicledetails.selectors";
import { Update } from "@ngrx/entity"


@Injectable()
export class VehicleDetailsEffects{
    constructor(private actions$:Actions, private vehicleDetailsService:CustomervehicledetailsService, private store:Store<CustomerDetailsModel>){}

    loadData$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(loadData),
            mergeMap((action) => {
                return this.vehicleDetailsService.getItem().pipe(map((customerDetails:CustomerDetailsModel[]) =>{
                    console.log(customerDetails);
                    return loadDataSuccess({customerDetails})
                }),
                catchError((error) => {
                    return of(loadDataFailure({msg: 'Data not loaded Successfully!'}));
                }))
            }));
    });

    addItem$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(addItem),
            mergeMap((action) => {
                return this.vehicleDetailsService.addItem(action.newItem).pipe(map((newItem:any) =>{
                    //console.log(newItem);
                    return addItemSuccess({newItem})
                }));
            }));
    });

    updateItem$ = createEffect(() =>{
        return this.actions$.pipe(
            ofType(updateItem),
            mergeMap((action) => {
                return this.vehicleDetailsService.updateItem(action.editItem).pipe(map((editItem:any) => {
                    const updatedData: Update<CustomerDetailsModel> = {
                        id: Number(action.editItem.id),
                        changes: {
                            ...action.editItem
                        }
                    }
                    return updateItemSuccess({editItem: updatedData});
                }));
            }));
    });

    deleteItem$ = createEffect(() =>{
        return this.actions$.pipe(
            ofType(deleteItem),
            mergeMap((action) => {
                return this.vehicleDetailsService.deleteItem(action.id).pipe(map((data:any) => {
                    return deleteItemSuccess({id : action.id});
                }));
            }));
    });

    getItemByID$ = createEffect(() =>{
        return this.actions$.pipe(
            ofType(ROUTER_NAVIGATION), 
            filter((route:RouterNavigatedAction) => {
                return route.payload.routerState.url.startsWith('/vehicleDetails/update');
            }),
            map((route:any) => {
                return route.payload.routerState['params']['id'];
            }),
            withLatestFrom(this.store.select(getData)),
            switchMap(([id, customerDetails]) => {
                if(!customerDetails.length){
                return this.vehicleDetailsService.getById(id).pipe(
                    map((customerDetails) => {
                        const seletedData = [{...customerDetails, id}]
                        return loadDataSuccess({customerDetails:seletedData})
                    })
                )
               }
               return of(dummyAction());
            })
        )
    }
    )
}