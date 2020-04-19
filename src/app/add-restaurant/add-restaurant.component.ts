import { Component, OnInit } from '@angular/core';
import { FoodyService } from '../service/foody.service'


@Component({
  selector: 'app-add-restaurant',
  templateUrl: './add-restaurant.component.html',
  styleUrls: ['./add-restaurant.component.css']
})
export class AddRestaurantComponent implements OnInit {
  user_id: any
  restaurant: any
  constructor(private appService: FoodyService) { }

  ngOnInit(): void {
  }

  addRestaurant(restaurant: any){
    this.appService.createNewRestaurant(this.user_id, restaurant).subscribe(restaurant=>{
      this.restaurant = restaurant
      console.log("Restaurant after created: "+this.restaurant);
      
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
