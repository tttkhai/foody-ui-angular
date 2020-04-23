import { Component, OnInit } from '@angular/core';
import { FoodyService } from '../service/foody.service'
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-restaurant',
  templateUrl: './add-restaurant.component.html',
  styleUrls: ['./add-restaurant.component.css']
})
export class AddRestaurantComponent implements OnInit {
  user_id: any
  restaurantForm: FormGroup
  all_food_types: any
  restaurant_types: any
  restaurant: Restaurant={
    name: '',
    email: '',
    address: '',
    phone_number: '',
    restaurant_types_id: null,
    // restaurant_type: {
    //   id: null,
    //   type_name: ''
    // },
    food_types: [{
      id: null,
      food_type: ''
    }]
  } 

  constructor(private appService: FoodyService, private form: FormBuilder) { }

  ngOnInit() {
    this.restaurantForm =  this.form.group({
      name: '',
      email: '',
      address: '',
      phoneNumber: '',
      restaurant_types_id: null,
      food_types: null
    })
    this.allRestaurantTypes()
    this.allFoodTypes()
  }

  addRestaurant(restaurant_value: any){
    // this.food_types=restaurant.id.value();
    console.log("restaurant.  important:  "+ JSON.stringify(restaurant_value));
    this.restaurant=restaurant_value;    
    console.log("Restaurant: "+JSON.stringify(this.restaurant));
    
    // this.appService.createNewRestaurant(this.restaurant, this.restaurant_type, this.food_types).subscribe(restaurants=>{
    this.appService.createNewRestaurant(this.restaurant).subscribe()
  }

  allRestaurantTypes(){
    this.appService.getAllRestaurantTypes().subscribe(restaurantTypes=>{
      this.restaurant_types=restaurantTypes
      console.log(this.restaurant_types);

    })
  }

  allFoodTypes(){
    this.appService.getAllFoodTypes().subscribe(foodTypes=> {
      this.all_food_types=foodTypes

    })
  }

}

export interface Restaurant{
  address: String,
  email: String,
  name: String,
  phone_number: String,
  restaurant_types_id: Number,
  // restaurant_type: {
  //   id: Number,
  //   type_name: String
  // },
  food_types: [{
    id: Number,
    food_type: String
  }]
}
