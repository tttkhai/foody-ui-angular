import { Component, OnInit, Input } from '@angular/core';
import { SearchLocationComponent } from '../search-location/search-location.component';

@Component({
  selector: 'app-result-list',
  templateUrl: './result-list.component.html',
  styleUrls: ['./result-list.component.css']
})
export class ResultListComponent implements OnInit {

  @Input() restaurantList:  SearchLocationComponent;
  columns=['Name', 'Address', 'Phone Number']
  constructor() { }

  ngOnInit() {
    console.log("App result list Component: " + this.restaurantList);
    
  }

}
