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
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AddRestaurantComponent } from './add-restaurant/add-restaurant.component'

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    RestaurantDetailComponent,
    UserInfoComponent,
    AllRestaurantsComponent,
    SearchLocationComponent,
    ResultListComponent,
    HeaderComponent,
    FooterComponent,
    AddRestaurantComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    // FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    RouterModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
