import { MatFormFieldModule } from '@angular/material/form-field';
import { FoodyService } from '../service/foody.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-search-location',
  templateUrl: './search-location.component.html',
  styleUrls: ['./search-location.component.css']
})
export class SearchLocationComponent implements OnInit {

  currentLat: any
  currentLong: any
  myForm: FormGroup
  miles : number[] = [3,5,10,20]
  food_types: any
  restaurant_types: any
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

  findMe() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.currentLat  = position.coords.latitude;
        this.currentLong = position.coords.longitude;
        console.log("This is longitude and latitude: "+ this.currentLong + " , "+this.currentLat);      
      });
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  }

  

  
}
