// import { KEYS } from './../Constants';
import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http'
import { map } from 'rxjs/operators'

@Injectable({
providedIn: 'root'
})
export class FoodyService {

  // keys= KEYS
  // location_url=`http://api.ipstack.com/check?access_key=$(keys.ipStack_apiKey)`
  url='http://localhost:8081/api/'

  constructor(private http: HttpClient) { }

  // currentLocation(){
  // this.http.get(this.location_url)
  // }

  getAllFoodTypes(){
    return this.http.get(this.url+'getFoodTypes').pipe(
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

  addReviews(reviews: any){
    return this.http.post(this.url, reviews)
  }

  reviewsByRestaurant(restaurantId: any){
    return this.http.get(this.url+'/reviews/restaurant=?'+restaurantId).pipe(
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
    this.http.get(this.url+'/restaurant/'+id)
  }

  restaurantByLocation(){
    this.http.get(this.url+'/results').pipe(
      map((restaurant:any)=>{
        return restaurant
      })
    )
  }

  deleteReviews(id: any){
    this.http.delete(this.url+'deleteReview/'+id)
  }

  updateReviews(id: any, review: any){
    this.http.put(this.url+'updateReview/'+id, review)
  }

}

