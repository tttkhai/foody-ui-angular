import { FoodyService } from './../service/foody.service';
import { Review } from '../models/Review';
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
  reviews: Review[]
  ngOnInit(): void {
    this.reviewsByRestaurant()
  }

  reviewsByRestaurant(){    
    this.appService.reviewsByRestaurant(this.restaurant_id).subscribe(review=>{
      this.reviews=review
    }) 
  }

}
