import { AuthenticationService } from './../service/authentication.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms'
import { Router } from '@angular/router'
import { AuthCredential } from '../models/AuthCredential';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  messageError: any
  loading: Boolean=false
  credentials: AuthCredential={
    'username': '',
    'password':''
  }

  loginForm: FormGroup
  constructor(private appService: AuthenticationService, private form: FormBuilder, private route: Router) { }

  ngOnInit(): void {
    this.loginForm = this.form.group({
      username: '',
      password: ''
    })
  }

  onSubmit(value){
    this.loading=true

    let username=value.username
    let password=value.password
    this.appService.login(username, password).subscribe((res: any)=>{
      console.log("this is response : "+ JSON.stringify(res))
      // this.appService.user=res.user
      // this.appService.token=res.token
      // localStorage.setItem('currentUser', JSON.stringify(this.appService.user))
      // localStorage.setItem('token', JSON.stringify(this.appService.token))
      
      window.location.href = "/";   
      
    }, (error)=>{
      if (error.status === 401) {
        this.messageError="Username or password is not correct"
        console.log(this.messageError);     
        return  
      }
    }, ()=>{
      this.loading=false    
    })
  }

}
