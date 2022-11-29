import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddVehicleDetailsComponent } from './add-vehicle-details/add-vehicle-details.component';
import { DetailsHomeComponent } from './details-home/details-home.component';
import { UpdateVehicleDetailsComponent } from './update-vehicle-details/update-vehicle-details.component';
import { VehiclesDetailsViewComponent } from './vehicles-details-view/vehicles-details-view.component';

const routes: Routes = [
  {
    path:'',
    component: DetailsHomeComponent,
    children:[
      {
        path: '', 
        redirectTo: 'details', 
        pathMatch: 'full'
      },
      {
        path:'details',
        component: VehiclesDetailsViewComponent
      },
      {
      path:'add',
      component: AddVehicleDetailsComponent
      },
      {
        path:'update/:id',
        component: UpdateVehicleDetailsComponent
      }]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VehicleDetailsRoutingModule { }
