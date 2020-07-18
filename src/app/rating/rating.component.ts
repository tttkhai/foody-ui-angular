import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit{
  // @Input() service: string;
  @Output() reviewStar= new EventEmitter<number>();


  ngOnInit() {
    // console.log("this is selected service: " +this.service);
    
  }
  stars: number[] = [1, 2, 3, 4, 5];
  selectedValue: number
  countStar(star) {
    this.selectedValue=star;
    this.reviewStar.emit(star);   
  }


}
