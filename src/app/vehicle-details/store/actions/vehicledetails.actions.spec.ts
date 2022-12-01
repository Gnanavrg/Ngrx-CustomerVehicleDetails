import { Update } from "@ngrx/entity"
import { CustomerDetailsModel } from 'src/app/models/customer-details.model';
import * as Actions from './vehicledetails.actions';

describe('Store > Data > DataActions', () => {
    it('should create a LoadData action', () => {
      const action = Actions.loadData();
      expect(action.type).toEqual(Actions.LOAD_DATA);
    });

    it('should create a loadDataSuccess action containing a payload', () => {
      const payload = [{ 
        id: 1, 
        name:'',
        vehicalList: [{
          vehicalModel:'',
          vehicalNumber:''
        }] 
      }];
      const action = Actions.loadDataSuccess({customerDetails:payload})
  
      expect({ ...action }).toEqual({
        type: Actions.LOAD_DATA_SUCCESS,
        customerDetails:payload
      });
    });

    it('should create a addItem action containing a payload', () => {
      const payload = { 
        id: 1, 
        name:'',
        vehicalList: [{
          vehicalModel:'',
          vehicalNumber:''
        }] 
      };
      const action = Actions.addItem({newItem:payload})
  
      expect({ ...action }).toEqual({
        type: Actions.ADD_ITEM,
        newItem:payload
      });
    });

    it('should create a addItemSuccess action containing a payload', () => {
      const payload = { 
        id: 1, 
        name:'',
        vehicalList: [{
          vehicalModel:'',
          vehicalNumber:''
        }] 
      };
      const action = Actions.addItemSuccess({newItem:payload})
  
      expect({ ...action }).toEqual({
        type: Actions.ADD_ITEM_SUCCESS,
        newItem:payload
      });
    });

    it('should create a updateItem action containing a payload', () => {
      const payload = { 
        id: 1, 
        name:'',
        vehicalList: [{
          vehicalModel:'',
          vehicalNumber:''
        }] 
      };
      const action = Actions.updateItem({editItem:payload})
  
      expect({ ...action }).toEqual({
        type: Actions.UPDATE_ITEM,
        editItem:payload
      });
    });

    it('should create a updateItem action containing a payload', () => {

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
      const action = Actions.updateItemSuccess({editItem: updatepayload })
  
      expect({ ...action }).toEqual({
        type: Actions.UPDATE_ITEM_SUCCESS,
        editItem:updatepayload
      });
    });

    it('should create a deleteItem action containing a payload', () => {
      const idNumber = 1;
      const action = Actions.deleteItem({id: idNumber })
      expect({ ...action }).toEqual({
        type: Actions.DELETE_ITEM,
        id: idNumber 
      });
    });

    it('should create a deleteItemSuccess action containing a payload', () => {
      const idNumber = 1;
      const action = Actions.deleteItemSuccess({id: idNumber })
      expect({ ...action }).toEqual({
        type: Actions.DELETE_ITEM_SUCCESS,
        id: idNumber 
      });
    });

  });