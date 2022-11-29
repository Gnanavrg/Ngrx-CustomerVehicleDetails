import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateVehicleDetailsComponent } from './update-vehicle-details.component';

describe('UpdateVehicleDetailsComponent', () => {
  let component: UpdateVehicleDetailsComponent;
  let fixture: ComponentFixture<UpdateVehicleDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateVehicleDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateVehicleDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
