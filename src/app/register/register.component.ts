import { AuthenticationService } from './../service/authentication.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  newUserForm: FormGroup
  roles: any
  errorMessage: any

  constructor(private appService: AuthenticationService, private form: FormBuilder, private router: Router ) { }

  ngOnInit(): void {
    this.newUserForm=this.form.group({
      "username": new FormControl('', [Validators.required]),
      "password": new FormControl('', [Validators.required]),
      "firstName": new FormControl('', [Validators.required]),
      "lastName": new FormControl('', [Validators.required]),
      "email": new FormControl('', [Validators.email]),
      "address": new FormControl('', [Validators.required]),
      "phoneNumber": new FormControl('', [Validators.required]),
      "role_id": new FormControl('', [Validators.required])
    })
    this.appService.getAllRoles().subscribe(roles=>this.roles=roles)
  }

  register(value){  
    this.appService.register(value).subscribe((res)=>{
      this.router.navigate(["/signin"]);        
    }, (error)=>{
      if(error.status===409){     
        this.errorMessage="Username is already existed"
        console.log(this.errorMessage);     
      }
    })
  }
}


