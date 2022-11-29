import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';

const routes: Routes = [
  {
    path:'',
    component: HomepageComponent
  },
  {
    path:'vehicleDetails',
    loadChildren: () => import('./vehicle-details/vehicle-details.module').then(m => m.VehicleDetailsModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
