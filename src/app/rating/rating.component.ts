import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit{
  @Output() reviewStar= new EventEmitter<number>();

  ngOnInit() {    
  }
  stars: number[] = [1, 2, 3, 4, 5];
  selectedValue: number
  countStar(star) {
    this.selectedValue=star;
    this.reviewStar.emit(star);   
  }
}
