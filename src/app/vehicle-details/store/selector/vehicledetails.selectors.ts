import { createFeatureSelector, createSelector, props } from '@ngrx/store';
import { RouterStateUrl } from 'src/app/app-store/router-store/custom-serializer';
import { getCurrentRoute } from 'src/app/app-store/router-store/router.selector';
import { CustomerDetailsModel } from 'src/app/models/customer-details.model';
import { vehicledetailsFeatureKey } from '../reducer/vehicledetails.reducer';
import { vehicleDetailsAdapter, VehicleDetailsState } from '../state/vehicledetails.state';


export const getVehicleDetailsState = createFeatureSelector<VehicleDetailsState>(vehicledetailsFeatureKey);

export const vehicleDetailsSelector = vehicleDetailsAdapter.getSelectors();

export const getData = createSelector(getVehicleDetailsState, vehicleDetailsSelector.selectAll)

export const getAllEntity = createSelector(getVehicleDetailsState, vehicleDetailsSelector.selectEntities)

export const getDataById = createSelector(
    getAllEntity, 
    getCurrentRoute, 
    (data, route:RouterStateUrl) => {
    return data ? data[route.params['id']] : null;
})
