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
  // restaurant: any
  restaurantForm: FormGroup
  food_types: any
  restaurant_types: any
  restaurant: Restaurant={
    name: '',
    email: '',
    address: '',
    phone_number: '',
    restaurant_types_id: null

  } 

  constructor(private appService: FoodyService, private form: FormBuilder) { }

  ngOnInit() {
    this.restaurantForm = this.form.group({
      name: '',
      email: '',
      address: '',
      phone_number: '',
      foodType: [],
      restaurantType: []
    })
    this.allRestaurantTypes()
    this.allFoodTypes()
  }

  addRestaurant(restaurant: any){
    this.appService.createNewRestaurant(this.user_id, restaurant).subscribe(restaurant=>{
    //   this.restaurant = restaurant
    //   console.log("Restaurant after created: "+this.restaurant);
      
    })
  }

  allRestaurantTypes(){
    this.appService.getAllRestaurantTypes().subscribe(restaurantTypes=>{
      this.restaurant_types=restaurantTypes
      console.log(this.restaurant_types);

    })
  }

  allFoodTypes(){
    this.appService.getAllFoodTypes().subscribe(foodTypes=> {
      this.food_types=foodTypes
      console.log(this.food_types);

    })
  }

}

export interface Restaurant{
  address: String,
  email: String,
  name: String,
  phone_number: String,
  restaurant_types_id: Number
}
