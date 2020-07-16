import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent {
  @Input() service: string;
  @Output() cleanlinessStar= new EventEmitter<number>();
  @Output() customerServiceStar= new EventEmitter<number>();
  @Output() deliveryStar= new EventEmitter<number>();
  @Output() tasteStar= new EventEmitter<number>();

  stars: number[] = [1, 2, 3, 4, 5];
  selectedValue: number;

  countStar(star) {
    this.selectedValue = star;
    console.log('Value of star', star);
    if(this.service==="cleanliness"){
      this.cleanlinessStar=star
    } 
    if(this.service==="customer_service"){
      this.customerServiceStar=star
    } 
    if(this.service==="deliver"){
      this.cleanlinessStar=star
    } 
    if(this.service==="taste"){
      this.deliveryStar=star
    } 
  }


}
