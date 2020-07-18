import { Component, OnInit } from '@angular/core';
import { FoodyService } from '../service/foody.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  user: any
  isLogin: Boolean
  token: any
  constructor(private appService: FoodyService, private route: Router) { }

  ngOnInit(): void {  
    
    this.user=this.appService.getUser();
    this.token=localStorage.getItem('token')
    console.log("IMPORTANT: user is "+ JSON.stringify(this.user));

  }

  logout(){
    localStorage.clear();
    window.location.reload();
  }

}
