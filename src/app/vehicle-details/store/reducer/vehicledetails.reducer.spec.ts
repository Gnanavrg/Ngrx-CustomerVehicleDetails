import { vehicleDetailsReducer } from './vehicledetails.reducer';
import { initialState, vehicleDetailsAdapter } from '../state/vehicledetails.state'
import * as Actions from '../actions/vehicledetails.actions';
import { Update } from "@ngrx/entity"
import { CustomerDetailsModel } from 'src/app/models/customer-details.model';

describe('Vehicledetails Reducer', () => {
  describe('an unknown action', () => {
    it('should return the previous state', () => {
      const action = {
        type: 'Unknown'
      } as any;

      const result = vehicleDetailsReducer(initialState, action);

      expect(result).toBe(initialState);
    });

    it('should load data on onloadDataSuccess', () => {
    
      const payload = [{ 
        id: 1, 
        name:'',
        vehicalList: [{
          vehicalModel:'',
          vehicalNumber:''
        }] 
      }];

      const action = Actions.loadDataSuccess({customerDetails:payload})

      const state = vehicleDetailsReducer(initialState, action);
      const data = vehicleDetailsAdapter.setAll(action.customerDetails, state)

      expect(state).toEqual(data);
    });

    it('should load data on addItemSuccess', () => {
    
      const payload = { 
        id: 1, 
        name:'',
        vehicalList: [{
          vehicalModel:'',
          vehicalNumber:''
        }] 
      };

      const action = Actions.addItemSuccess({newItem:payload})

      const state = vehicleDetailsReducer(initialState, action);
      const data = vehicleDetailsAdapter.addOne(action.newItem, state)

      expect(state).toEqual(data);
    });

    it('should load data on updateItemSuccess', () => {
    
      const payload = { 
        id: 1, 
        name:'',
        vehicalList: [{
          vehicalModel:'',
          vehicalNumber:''
        }] 
      };

      const updatepayload:Update<CustomerDetailsModel> = {
        id: 1,
        changes: payload
      };

      const action = Actions.updateItemSuccess({editItem:updatepayload})

      const state = vehicleDetailsReducer(initialState, action);
      const data = vehicleDetailsAdapter.updateOne(action.editItem, state)

      expect(state).toEqual(data);
    });

  });

  it('should load data on deleteItemSuccess', () => {
    
    const idNumber = 1;

    const action = Actions.deleteItemSuccess({id:idNumber})

    const state = vehicleDetailsReducer(initialState, action);
    const data = vehicleDetailsAdapter.removeOne(action.id, state)

    expect(state).toEqual(data);
  });

 
});
