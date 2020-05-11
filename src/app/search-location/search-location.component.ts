import { FoodyService } from '../service/foody.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
// import {AgmMap, MouseEvent,MapsAPILoader  } from '@agm/core';  


@Component({
  selector: 'app-search-location',
  templateUrl: './search-location.component.html',
  styleUrls: ['./search-location.component.css']
})
export class SearchLocationComponent implements OnInit {

  food: Number[]
  currentLat: any
  currentLong: any
  myForm: FormGroup
  miles : number[] = [3,5,10,20]
  food_types: any
  restaurant_types: any
  restaurantList: any
  preferences: Preferences={
    lat: null,
    lng: null, 
    cuisine: [],
    food_types: [],
    distance: null
  }
  constructor(private form: FormBuilder, private appService: FoodyService) { }

  ngOnInit() {
    this.myForm = this.form.group({
        restaurantType: [],
        foodType: [],
        miles: ''
    })

    this.getFoodTypes()
    this.getRestaurantTypes()
  }

  getFoodTypes(){
    this.appService.getAllFoodTypes().subscribe(foodtype=>{
      this.food_types=foodtype
      console.log(this.food_types);
    })
  }

  getRestaurantTypes(){
    this.appService.getAllRestaurantTypes().subscribe(cuisine=>{
      this.restaurant_types=cuisine
      console.log(this.restaurant_types);

    })
  }

  getRestaurantListByPreferences(myForm) {    
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.preferences.lat=position.coords.latitude;
        this.preferences.lng=position.coords.longitude;
        this.preferences.food_types=myForm.foodType
        this.preferences.cuisine=myForm.restaurantType
        this.preferences.distance=myForm.miles
        console.log("IMPORTANT: "+JSON.stringify(this.preferences));
        this.appService.getRestaurantListByPreferences(this.preferences).subscribe((list: any)=>{
          this.restaurantList=list
          console.log("RETURN restaurant list: "+JSON.stringify(this.restaurantList))         
        })
      });
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  }  
}

export interface Preferences{
  lat: Number,
  lng: Number, 
  cuisine: Number[],
  food_types: Number[],
  distance: Number
}


