import { FoodyService } from '../service/foody.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Preferences, Restaurant } from '../models/Restaurant';


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
  restaurantList: Restaurant[]
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
    })
  }

  getRestaurantTypes(){
    this.appService.getAllRestaurantTypes().subscribe(cuisine=>{
      this.restaurant_types=cuisine
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
        this.appService.getRestaurantListByPreferences(this.preferences).subscribe(list=>{
          this.restaurantList=list;
        })
      });
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  }  
}


