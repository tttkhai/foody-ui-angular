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
  food_types: any
  restaurant_types: any
  restaurant: Restaurant={
    name: '',
    email: '',
    address: '',
    phone_number: '',
    restaurant_type: {
      id: null,
      type_name: ''
    },
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
      foodTypes: null,
      restaurantType: null
    })
    this.allRestaurantTypes()
    this.allFoodTypes()
  }

  addRestaurant(restaurant_value: any){
    // this.food_types=restaurant.id.value();
    console.log("restaurant.  important:  "+ JSON.stringify(restaurant_value));
    this.restaurant=restaurant_value;
    // this.restaurant.restaurant_types.id=restaurant_value.id
    this.restaurant.restaurant_type=this.restaurant_types.filter(type=>{
      return restaurant_value.restaurantType===type.id 
    })
    console.log("Restaurant Type Object: "+JSON.stringify(this.restaurant.restaurant_type));
    restaurant_value.foodTypes.forEach(foodType=>{
      this.restaurant.food_types=this.food_types.filter(type=>{
        // console.log("Food Type id: "+type.id+ "foodType : "+ foodType);
        // if(type.id===foodType){
        //   console.log('yes '+ type.food_type);
        //   console.log('Food Type: '+ JSON.stringify(type));
        // }
        return type.id===foodType
      })
    })
    console.log("Foodtype Object: " + JSON.stringify(this.restaurant.food_types));
    
    // this.appService.createNewRestaurant(this.user_id, restaurant).subscribe(restaurants=>{
    //   this.restaurant = restaurant
    //   console.log("Restaurant after created: "+restaurants);
      
    // })
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
  restaurant_type: {
    id: Number,
    type_name: String
  },
  food_types: [{
    id: Number,
    food_type: String
  }]
}
