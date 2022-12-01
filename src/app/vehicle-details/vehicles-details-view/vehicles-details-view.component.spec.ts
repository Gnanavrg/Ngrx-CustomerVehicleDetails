import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehiclesDetailsViewComponent } from './vehicles-details-view.component';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { By } from '@angular/platform-browser';
import { VehicleDetailsState } from '../store/state/vehicledetails.state';
import * as Selector from '../store/selector/vehicledetails.selectors'

describe('VehiclesDetailsViewComponent', () => {
  let component: VehiclesDetailsViewComponent;
  let fixture: ComponentFixture<VehiclesDetailsViewComponent>;
  let store: MockStore<VehicleDetailsState>;

  const vehicleDetails = {
    ids: [1,2],
    entities: {
      '1': [{
        name: 'Sundaram G',
        vehicleList: [
          {
            vehicleModel: 'Maruthi',
            vehicleNumber: 'ADV423'
          },
          {
            vehicleModel: 'Hyundai',
            vehicleNumber: 'ASV123'
          }
        ],
        id: 1
      }],
      '2': [{
        name: 'Ramachandran V',
        vehicleList: [
          {
            vehicleModel: 'TATA',
            vehicleNumber: 'BDX543'
          }
        ],
        id: 2
      }]
    }
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VehiclesDetailsViewComponent ],
      providers: [provideMockStore()]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VehiclesDetailsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should load component', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as title 'Customer Vehicle Details'`, () => {
    expect(component.title).toEqual('Customer Vehicle Details');
  });

  function getByCSS(selector: string) {
    const debugElement = fixture.debugElement.query(By.css(selector));
    const el: HTMLElement = debugElement.nativeElement;
    el.click();
    fixture.detectChanges();
  }
 
  function getCounterText() {
    const compiled = fixture.debugElement.nativeElement;
    return compiled.querySelector('div').textContent;
  }

});
