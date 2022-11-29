import { Action, createReducer, on } from '@ngrx/store';
import { addItem, addItemSuccess, deleteItem, deleteItemSuccess, loadDataFailure, loadDataSuccess, updateItem, updateItemSuccess } from '../actions/vehicledetails.actions';
import { initialState, vehicleDetailsAdapter, VehicleDetailsState } from '../state/vehicledetails.state'

export const vehicledetailsFeatureKey = 'vehicleDetails';

export const _vehicleDetailsReducer = createReducer(
  initialState,
  on(addItemSuccess, (state, action) => {
      return vehicleDetailsAdapter.addOne(action.newItem, state);
  }),
  on(updateItemSuccess, (state, action) => {
    return vehicleDetailsAdapter.updateOne(action.editItem, state);
  }),
  on(deleteItemSuccess, (state, action) => {
    return vehicleDetailsAdapter.removeOne(action.id, state);
  }),
  on(loadDataSuccess, (state, action) => {
    return vehicleDetailsAdapter.setAll(action.customerDetails, state);
  }),
  on(loadDataFailure, (state, action) => {
    confirm(action.msg);
    return vehicleDetailsAdapter.setAll([], state);
  })
);

export function vehicleDetailsReducer(state:VehicleDetailsState, action:Action) {
  return _vehicleDetailsReducer(state, action);
}