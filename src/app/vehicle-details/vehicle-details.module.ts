import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VehicleDetailsRoutingModule } from './vehicle-details-routing.module';
import { VehiclesDetailsViewComponent } from './vehicles-details-view/vehicles-details-view.component';
import { AddVehicleDetailsComponent } from './add-vehicle-details/add-vehicle-details.component';
import { UpdateVehicleDetailsComponent } from './update-vehicle-details/update-vehicle-details.component';
import { vehicledetailsFeatureKey, vehicleDetailsReducer } from './store/reducer/vehicledetails.reducer';
import { StoreModule } from '@ngrx/store';
import { DetailsHomeComponent } from './details-home/details-home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EffectsModule } from "@ngrx/effects";
import { VehicleDetailsEffects } from "./store/effects/vehicledetails.effects"

@NgModule({
  declarations: [
    VehiclesDetailsViewComponent,
    AddVehicleDetailsComponent,
    UpdateVehicleDetailsComponent,
    DetailsHomeComponent
  ],
  imports: [
    CommonModule,
    VehicleDetailsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forFeature(vehicledetailsFeatureKey, vehicleDetailsReducer),
    EffectsModule.forFeature([VehicleDetailsEffects])
  ]
})
export class VehicleDetailsModule { }
