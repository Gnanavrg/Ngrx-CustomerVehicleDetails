import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateVehicleDetailsComponent } from './update-vehicle-details.component';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { FormGroup, FormControl, Validators, FormBuilder, FormArray } from '@angular/forms';


describe('UpdateVehicleDetailsComponent', () => {
  let component: UpdateVehicleDetailsComponent;
  let fixture: ComponentFixture<UpdateVehicleDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateVehicleDetailsComponent ],
      providers: [provideMockStore(), FormBuilder]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateVehicleDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as title 'Update Customer Vehicle details'`, () => {
    expect(component.title).toEqual('Update Customer Vehicle details');
  });
});
