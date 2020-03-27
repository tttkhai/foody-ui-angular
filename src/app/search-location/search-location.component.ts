import { FoodyService } from '../service/foody.service';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-search-location',
  templateUrl: './search-location.component.html',
  styleUrls: ['./search-location.component.css']
})
export class SearchLocationComponent implements OnInit {

  currentLat: any
  currentLong: any
  constructor(private form: FormControl, private appService: FoodyService) { }

  ngOnInit() {
  }
  findMe() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.currentLat  = position.coords.latitude;
        this.currentLong = position.coords.longitude;
        console.log("This is longitude and latitude: "+ this.currentLong + " , "+this.currentLat);      
      });
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  }

  

  
}
