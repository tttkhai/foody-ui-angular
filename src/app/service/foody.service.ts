// import { KEYS } from './../Constants';
import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpEvent, HttpErrorResponse, HttpResponse } from '@angular/common/http'
import { map, tap, catchError } from 'rxjs/operators'
import { throwError, Observable } from 'rxjs';
import { Review } from './../new-review/new-review.component';
import { summaryFileName } from '@angular/compiler/src/aot/util';


@Injectable({
providedIn: 'root'
})
export class FoodyService {

  url='http://localhost:8081/api/'

  token: any
  user: any
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'Bearer ' + this.getToken()
    })
  };
  
  constructor(private http: HttpClient) { }

  login(user: any){
    return this.http.post(this.url+'login', user).pipe(
      catchError((error) => {  
        return throwError(error);
      })
    )
  }

  getAllFoodTypes(){
    return this.http.get(this.url+'foodTypes').pipe(
      map(foodType =>{
        return foodType
      })
    )
  }

  getAllRoles(){
    return this.http.get(this.url+'roles')
  }
  
  addNewUser(user: any){
    return this.http.post(this.url+'newUser', user).pipe(
      catchError((error) => {
        return throwError(error);
      })
    )
  
  }

  getUser(){
    return JSON.parse(localStorage.getItem('user'));
  }

  getToken(){
    return JSON.parse(localStorage.getItem('token'));

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
    return this.http.post(this.url+'newReview', reviews, this.httpOptions)
  }

  reviewsByRestaurant(restaurantId: number): Observable<Review>{
    return this.http.get(this.url+'reviews/'+restaurantId, this.httpOptions).pipe(
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

  // createNewRestaurant(restaurant: any){
  //   let bodyString = JSON.stringify({ restaurant});
  //   let headers = new HttpHeaders({ 'Content-Type': 'application/JSON' });
  //   return this.http.post(this.url+'addRestaurant', bodyString, { headers });
  // }

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
    this.http.put(this.url+'review/'+id, review, this.httpOptions)
  }
}

