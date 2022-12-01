import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddVehicleDetailsComponent } from './add-vehicle-details.component';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { FormGroup, FormControl, Validators, FormBuilder, FormArray } from '@angular/forms';

describe('AddVehicleDetailsComponent', () => {
  let component: AddVehicleDetailsComponent;
  let fixture: ComponentFixture<AddVehicleDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddVehicleDetailsComponent ],
      providers: [provideMockStore(), FormBuilder]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddVehicleDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as title 'Add Customer Vehicle details'`, () => {
    expect(component.title).toEqual('Add Customer Vehicle details');
  });
});
