import { Component, OnInit } from '@angular/core';
import { FoodyService } from '../service/foody.service'
import { FormBuilder, FormGroup } from '@angular/forms'

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  user: User={
    'username': '',
    'password':''
  }

  loginForm: FormGroup
  constructor(private appService: FoodyService, private form: FormBuilder) { }

  ngOnInit(): void {
    this.loginForm = this.form.group({
      username: '',
      password: ''
    })
  }

  onSubmit(value){
    this.user.username=value.username
    this.user.password=value.password
    console.log("value.username "+ value.username + "value.password "+ value.password);
    
    this.appService.authenticate(this.user).subscribe((token)=>{
      console.log("this is token: "+ token);
      
    } )
  }

}

export interface User{
  'username': String,
  'password': String
}
