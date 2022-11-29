import { createAction, props } from '@ngrx/store';
import { CustomerDetailsModel } from 'src/app/models/customer-details.model';
import { Update } from "@ngrx/entity"

export const ADD_ITEM = '[Customer Vehicle Details] addItem';
export const ADD_ITEM_SUCCESS = '[Customer Vehicle Details] addItemSuccess';
export const UPDATE_ITEM = '[Customer Vehicle Details] updateItem';
export const UPDATE_ITEM_SUCCESS = '[Customer Vehicle Details] updateItemSuccess';
export const DELETE_ITEM = '[Customer Vehicle Details] deleteItem';
export const DELETE_ITEM_SUCCESS = '[Customer Vehicle Details] deleteItemSuccess';
export const LOAD_DATA = '[Customer Vehicle Details] loadData';
export const LOAD_DATA_SUCCESS = '[Customer Vehicle Details] loadDataSuccess';
export const LOAD_DATA_FAILURE = '[Customer Vehicle Details] loadDataFailure';


export const addItem = createAction(
  ADD_ITEM,
  props<{newItem:CustomerDetailsModel}>()
);

export const addItemSuccess = createAction(
  ADD_ITEM_SUCCESS,
  props<{newItem:CustomerDetailsModel}>()
);

export const updateItem = createAction(
  UPDATE_ITEM,
  props<{editItem:CustomerDetailsModel}>()
);

export const updateItemSuccess = createAction(
  UPDATE_ITEM_SUCCESS,
  props<{editItem: Update<CustomerDetailsModel>}>()
);

export const deleteItem = createAction(
  DELETE_ITEM,
  props<{id:number}>()
);

export const deleteItemSuccess = createAction(
  DELETE_ITEM_SUCCESS,
  props<{id:number}>()
);

export const loadData = createAction(
  LOAD_DATA
);

export const loadDataSuccess = createAction(
  LOAD_DATA_SUCCESS,
  props<{customerDetails:CustomerDetailsModel[]}>()
);

export const loadDataFailure = createAction(
  LOAD_DATA_FAILURE,
  props<{msg:string}>()
);

export const dummyAction = createAction('[Dummy Action');




