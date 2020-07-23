import { FoodyService } from './../service/foody.service';
import { Review } from './../new-review/new-review.component';
import { Observable } from 'rxjs';
import { Component, OnInit, Input } from '@angular/core';




@Component({
  selector: 'app-review-list',
  templateUrl: './review-list.component.html',
  styleUrls: ['./review-list.component.css']
})
export class ReviewListComponent implements OnInit {
  @Input() restaurant_id: number

  constructor(private appService: FoodyService) { }
  reviews: Review
  ngOnInit(): void {
    this.reviewsByRestaurant()
  }

  reviewsByRestaurant(){
    // console.log("Restaurant: important: "+JSON.stringify(this.restaurant));
    
    this.appService.reviewsByRestaurant(this.restaurant_id).subscribe(review=>{
      console.log("this is all the reviews: "+JSON.stringify(review));
      this.reviews=review
    }) 
  }

}
