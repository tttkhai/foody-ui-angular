// import { KEYS } from './../Constants';
import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpEvent, HttpErrorResponse, HttpResponse } from '@angular/common/http'
import { map, tap, catchError } from 'rxjs/operators'

@Injectable({
providedIn: 'root'
})
export class FoodyService {

  url='http://localhost:8081/api/'

  token: any
  user: any
  constructor(private http: HttpClient) { }

  isLogin(){
    return typeof this.user !== 'undefined' && this.user
  }

  login(user: any){
    return this.http.post(this.url+'login', user)
  }

  getAllFoodTypes(){
    return this.http.get(this.url+'getFoodTypes').pipe(
      map(foodType =>{
        return foodType
      })
    )
  }

  getAllRoles(){
    return this.http.get(this.url+'roles')
  }
  
  addNewUser(user: any){
    return this.http.post(this.url+'addUser', user)
  }

  getAllRestaurantTypes(){
    return this.http.get(this.url+'restaurantTypes').pipe(
      map(restaurantType =>{
        return restaurantType
      })
      )
  }

  getRestaurantListByPreferences(preference: any){
    return this.http.post(this.url+'restaurantList', preference)
  }

  addReviews(reviews: any){
    return this.http.post(this.url, reviews)
  }

  reviewsByRestaurant(restaurantId: any){
    return this.http.get(this.url+'reviews/restaurant=?'+restaurantId).pipe(
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

  createNewRestaurant(restaurant: any){
    let bodyString = JSON.stringify({ restaurant});
    let headers = new HttpHeaders({ 'Content-Type': 'application/JSON' });
    return this.http.post(this.url+'addRestaurant', bodyString, { headers });
  }

  restaurantById(id: any){
    this.http.get(this.url+'restaurant/'+id)
  }

  searchRestaurantByLocation(){
    this.http.get(this.url+'results').pipe(
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

