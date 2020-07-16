import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent {
  @Input() activeStars: number;
  stars: number[] = [1, 2, 3, 4, 5];
  selectedValue: number;
  
  countStar(star) {
    this.selectedValue = star;
    console.log('Value of star', star);
  }
}
