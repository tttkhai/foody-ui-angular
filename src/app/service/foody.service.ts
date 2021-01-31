import { AuthenticationService } from './authentication.service';
import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http'
import { map } from 'rxjs/operators'
import { Observable } from 'rxjs';
import { Restaurant } from '../models/Restaurant';


@Injectable({
providedIn: 'root'
})
export class FoodyService {

  url='http://localhost:8081/api/'

  token: any
  user: any
  
  constructor(private http: HttpClient, private auth: AuthenticationService) { }

  getAllFoodTypes(){
    return this.http.get(this.url+'foodTypes').pipe(
      map(foodType =>{
        return foodType
      })
    )
  }

  getAllRestaurantTypes(){
    return this.http.get(this.url+'restaurantTypes').pipe(
      map(restaurantType =>{
        return restaurantType
      })
      )
  }

  getRestaurantListByPreferences(preference: any): Observable<Restaurant[]>{
    return this.http.post<Restaurant[]>(this.url+'search/restaurantList', preference);
  }

  addReview(reviews: any){
    return this.http.post(this.url+'newReview', reviews)
  }

  reviewsByRestaurant(restaurantId: number){
    return this.http.get(this.url+'reviews/'+restaurantId).pipe(
      map((review: any)=>{
        return review
      })
    )
  }

  allRestaurants(){
    this.http.get(this.url+'/restaurants').pipe(
      map(restaurant=>{
        return restaurant
      })
    )
  }

  restaurantById(id: any){
    return this.http.get(this.url+'restaurant/'+id)
  }

  addTotal(element: []): number{
    if(element.length==0){
      return;
    }
    var sum=0;
    for(var i=0; i<element.length; i++){
      sum+=element[i];
    }
    return sum/element.length;
  }

  searchRestaurantByLocation(){
    this.http.get(this.url+'results').pipe(
      map((restaurant:any)=>{
        return restaurant
      })
    )
  }

  deleteReviews(id: any){
    this.http.delete(this.url+'review/'+id)
  }

  updateReviews(id: any, review: any){
    this.http.put(this.url+'review/'+id, review)
  }
}

