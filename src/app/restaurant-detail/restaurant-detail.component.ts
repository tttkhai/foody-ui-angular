import { Component, OnInit } from '@angular/core'
import { FoodyService } from '../service/foody.service'
import { ActivatedRoute } from '@angular/router'


@Component({
  selector: 'app-restaurant-detail',
  templateUrl: './restaurant-detail.component.html',
  styleUrls: ['./restaurant-detail.component.css']
})
export class RestaurantDetailComponent implements OnInit {

  constructor(private route: ActivatedRoute, private appService: FoodyService) { }
  id = this.route.snapshot.params['id'];
  reviews=['cleanliness', 'customer_service', 'deliver', 'taste', 'comment', 'restaurant_id', 'user_id']
  restaurant: any
  
  review: Review={
    cleanliness: null,
    customer_service: null,
    deliver: null,
    taste: null ,
    comment: '',
    restaurant_id: null,
    user_id: null
  }
  ngOnInit() {
    this.getRestaurantById()
  }

  getRestaurantById(){
    this.appService.restaurantById(this.id).subscribe((restaurant)=>{
      this.restaurant=restaurant
    })
  }

  addReview(){
    this.appService.addReviews(this.review).subscribe()
  }
  

}

export interface Review{
  cleanliness: number,
  customer_service: number,
  deliver: number,
  taste: number ,
  comment: String,
  restaurant_id: number,
  user_id: number
}
