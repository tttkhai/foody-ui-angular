import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { RestaurantDetailComponent } from './restaurant-detail/restaurant-detail.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { AllRestaurantsComponent } from './all-restaurants/all-restaurants.component';
import { SearchLocationComponent } from './search-location/search-location.component';
import { ResultListComponent } from './result-list/result-list.component';
import {HttpClient , HttpClientModule} from '@angular/common/http'


@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    RestaurantDetailComponent,
    UserInfoComponent,
    AllRestaurantsComponent,
    SearchLocationComponent,
    ResultListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClient,
    HttpClientModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
