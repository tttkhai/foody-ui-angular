import { Review } from './../models/Review';
import { FoodyService } from './../service/foody.service';
import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-new-review',
  templateUrl: './new-review.component.html',
  styleUrls: ['./new-review.component.css']
})
export class NewReviewComponent implements OnInit {

  constructor(private appService: FoodyService) { }

  @Input() set restaurant_id(value: Number) {
    this.review.restaurant_id = value;  
  };
  reviews=['cleanliness', 'customer_service', 'deliver', 'taste']
  selectedService: string
  review: Review={
    cleanliness: 1,
    customer_service: 1,
    deliver: 1,
    taste: 1 ,
    comment: '',
    restaurant_id: null,
    user_id: null
  }

  ngOnInit(): void {    
  }

  addReview(review: Review){
    review.user_id=JSON.parse(localStorage.getItem("currentUser")).id;
    review.comment=(<HTMLInputElement>document.getElementById("comment")).value;
    
    this.appService.addReview(review).subscribe(review=> console.log("Added review: "+JSON.stringify(review)));
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
  }
  
}

