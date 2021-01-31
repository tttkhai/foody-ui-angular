import { AuthenticationService } from './../service/authentication.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserAuthentication } from '../models/User';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  users: any
  isLogin: Boolean
  token: any
  currentUser: UserAuthentication
  currentUserSubscription: Subscription
  constructor(private authService: AuthenticationService, private router: Router) {
    
    this.currentUserSubscription = this.authService.currentUser.subscribe((user:any) => {
      this.currentUser = user;
      console.log("In Header component, very important: "+JSON.stringify(this.currentUser));
    });
  }

  

  logout(){
    this.authService.logout();
  }

}
