// import { Restaurant } from './../add-restaurant/add-restaurant.component';
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
  restaurant: any
 
  ngOnInit() {
    this.getRestaurantById()    
  }

  getRestaurantById(){
    this.appService.restaurantById(this.id).subscribe((restaurant)=>{
      this.restaurant=restaurant
    })
  } 
}


