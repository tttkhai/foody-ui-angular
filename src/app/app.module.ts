import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RestaurantDetailComponent } from './restaurant-detail/restaurant-detail.component';
import { AllRestaurantsComponent } from './all-restaurants/all-restaurants.component';
import { SearchLocationComponent } from './search-location/search-location.component';
import { ResultListComponent } from './result-list/result-list.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AddRestaurantComponent } from './add-restaurant/add-restaurant.component'
import { KEYS } from './keys/keys';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegisterComponent } from './register/register.component'
import { RatingComponent } from './rating/rating.component';
import { ReviewListComponent } from './review-list/review-list.component';
import { NewReviewComponent } from './new-review/new-review.component';
import { JwtInterceptor } from './helper/jwt.interceptor';
import { ErrorInterceptor } from './helper/error.interceptor';


const routes: Routes = [
  {path: '', component: SearchLocationComponent},
  {path: 'addRestaurant', component: AddRestaurantComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'restaurant/:id', component: RestaurantDetailComponent},
  {path: 'signin', component: LoginPageComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    RestaurantDetailComponent,
    AllRestaurantsComponent,
    SearchLocationComponent,
    ResultListComponent,
    HeaderComponent,
    FooterComponent,
    AddRestaurantComponent,
    LoginPageComponent,
    RegisterComponent,
    RatingComponent,
    ReviewListComponent,
    NewReviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatFormFieldModule,
    MatSelectModule,
    MatTableModule,
    MatInputModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    RouterModule,
    RouterModule.forRoot(routes),
    
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },   
],
  bootstrap: [AppComponent]
})
export class AppModule { }
