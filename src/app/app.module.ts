import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { AppheaderComponent } from './common/appheader/appheader.component';
import { HomepageComponent } from './homepage/homepage.component';
import { VehicleDetailsModule } from './vehicle-details/vehicle-details.module';
import { EffectsModule } from "@ngrx/effects";
import { HttpClientModule } from '@angular/common/http';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { appReducer } from './app-store/app.state';
import { CustomSerializer } from './app-store/router-store/custom-serializer';

@NgModule({
  declarations: [
    AppComponent,
    AppheaderComponent,
    HomepageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    VehicleDetailsModule,
    HttpClientModule,
    StoreModule.forRoot(appReducer),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    EffectsModule.forRoot([]),
    StoreRouterConnectingModule.forRoot({ serializer: CustomSerializer })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
