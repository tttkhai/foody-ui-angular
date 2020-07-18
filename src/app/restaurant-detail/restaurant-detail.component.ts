import { Restaurant } from './../add-restaurant/add-restaurant.component';
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
  // reviews=['Cleanliness', 'Customer Service', 'Delivery', 'Taste']
  reviews=['cleanliness', 'customer_service', 'deliver', 'taste']
  selectedService: string
  restaurant: any
  hello: any
  review: Review={
    cleanliness: 1,
    customer_service: 1,
    deliver: 1,
    taste: 1 ,
    comment: '',
    restaurant: this.restaurant,
    user: this.appService.getUser()
  }
  ngOnInit() {
    this.getRestaurantById()    
  }

  getRestaurantById(){
    this.appService.restaurantById(this.id).subscribe((restaurant)=>{
      this.restaurant=restaurant
    })
  }

  addReview(review: any){
    review.restaurant=this.restaurant;
    review.comment=(<HTMLInputElement>document.getElementById("comment")).value;
    console.log("REVIEW: "+ JSON.stringify(review));
    
    this.appService.addReviews(review).subscribe();
  }

  updateStar(star, service){   
    if(service==="cleanliness"){
      this.review.cleanliness=star;
    } 
    if(service==="customer_service"){
      this.review.customer_service=star;
    } 
    if(service==="taste"){
      this.review.taste=star;
    } 
    if(service==="deliver"){
      this.review.deliver=star;
    }   
    console.log("service: "+ service+ " has: "+ star+" stars");
    console.log("clean: "+this.review.cleanliness);
    
  }
}

export interface Review{
  cleanliness: number,
  customer_service: number,
  deliver: number,
  taste: number ,
  comment: String,
  restaurant: any,
  user: any
}
