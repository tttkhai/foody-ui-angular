import { Component, OnInit } from '@angular/core';
import { FoodyService } from '../service/foody.service'
import { FormBuilder, FormGroup } from '@angular/forms'
import { HttpEvent, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  messageError: any
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
    this.appService.login(this.user).pipe(
      tap((err: any) => {  
        if (err instanceof HttpErrorResponse) {
            if (err.status === 401) {
                this.messageError="Username or password is not correct"
            }
        }
      })
    ).subscribe((res: any)=>{
      console.log("this is response : "+ JSON.stringify(res));
      this.appService.user=res.user
      this.appService.token=res.token
    } )
  }

}

export interface User{
  'username': String,
  'password': String
}
