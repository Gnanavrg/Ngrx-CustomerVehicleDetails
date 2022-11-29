import { vehicleDetailsReducer } from './vehicledetails.reducer';
import { initialState } from '../state/vehicledetails.state'

describe('Vehicledetails Reducer', () => {
  describe('an unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;

      const result = vehicleDetailsReducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});
