import { AuthenticationService } from './../service/authentication.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms'
import { Router } from '@angular/router'
import { AuthCredential } from '../models/AuthCredential';
import { first } from 'rxjs/operators';


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
  constructor(private authService: AuthenticationService, private form: FormBuilder, private router: Router) { 
    if (this.authService.currentUserValue) { 
      this.router.navigate(['/']);
    }
  }

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
    this.authService.login(username, password).pipe(first()).subscribe((res: any)=>{
      this.router.navigate["/"];        
    }, (error)=>{
      if (error.status === 401) {
        this.messageError="Username or password is not correct"
        console.log(this.messageError);    
        this.loading=false    
        return  
      }
    }, ()=>{
      this.loading=false    
    })
  }

}
