import { Observable, of } from 'rxjs';
import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { TestScheduler  } from 'rxjs/testing';
import { VehicleDetailsEffects } from './vehicledetails.effects';
import { CustomervehicledetailsService } from 'src/app/services/customervehicledetails.service';
import * as Actions from '../actions/vehicledetails.actions';
import { hot, cold, getTestScheduler } from 'jasmine-marbles'

describe('VehicleDetailsEffects', () => {
  const initialState = { customerDetails: [] };
  const mockService = jasmine.createSpyObj('CustomervehicledetailsService', [
    'getItem',
    'getById',
    'addItem',
    'updateItem',
    'deleteItem'
  ]);
  let effects: VehicleDetailsEffects;
  let actions$: Observable<any>;
  let store: MockStore<any>;
  let testScheduler:any;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        VehicleDetailsEffects,
        provideMockStore({ initialState }),
        provideMockActions(() => actions$),
        { provide: CustomervehicledetailsService, useValue: mockService }
      ]
    });

    effects = TestBed.inject(VehicleDetailsEffects);
    store = TestBed.inject(MockStore);
    store.setState({});

    testScheduler = new TestScheduler((actual, expected) => {
      expect(actual).toEqual(expected);
    });
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });

  // describe('loadData$', () => {
  //   it('should handle appLoaded and return a loadDataSuccess action', () => {
  //     const customerDetails:any = [];
  //     const action = Actions.loadData();
  //     const outcome = Actions.loadDataSuccess({ customerDetails });

  //     testScheduler.run(({ hot, cold, expectObservable }) => {
  //       actions = hot('-a', { a: action });
  //       const response = cold('-b|', { b: customerDetails });
  //       mockService.getItem.and.returnValue(response);

  //       expectObservable(effects.loadData$).toBe('--b', { b: outcome });
  //     });
  //   });


  
})