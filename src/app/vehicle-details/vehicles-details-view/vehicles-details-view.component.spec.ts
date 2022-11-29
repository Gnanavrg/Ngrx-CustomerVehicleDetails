import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehiclesDetailsViewComponent } from './vehicles-details-view.component';

describe('VehiclesDetailsViewComponent', () => {
  let component: VehiclesDetailsViewComponent;
  let fixture: ComponentFixture<VehiclesDetailsViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VehiclesDetailsViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VehiclesDetailsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
