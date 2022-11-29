import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddVehicleDetailsComponent } from './add-vehicle-details.component';

describe('AddVehicleDetailsComponent', () => {
  let component: AddVehicleDetailsComponent;
  let fixture: ComponentFixture<AddVehicleDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddVehicleDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddVehicleDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
