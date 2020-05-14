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
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AddRestaurantComponent } from './add-restaurant/add-restaurant.component'
import { KEYS } from './keys/keys';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegisterComponent } from './register/register.component'
import { TokenInterceptor } from './http-interceptors/token.interceptor';

const routes: Routes = [
  {path: '', component: SearchLocationComponent},
  {path: 'addRestaurant', component: AddRestaurantComponent},
  {path: 'login', component: LoginPageComponent},
  {path: 'register', component: RegisterComponent},

  
  
];


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
    AddRestaurantComponent,
    LoginPageComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    RouterModule,
    RouterModule.forRoot(routes),
    // AgmCoreModule.forRoot({
    //   apiKey: KEYS.google_api_key
    // })
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
