import { Component, OnInit } from '@angular/core';
import { FoodyService } from '../service/foody.service'
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  newUserForm: FormGroup
  roles: any
  newUser: User={
    "username": "",
    "password": "",
    "firstName": "",
    "lastName": "",
    "email": "",
    "address": "",
    "phoneNumber": "",
    "role": {
      "id": null,
      "name": ""
    }
  }

  constructor(private appService: FoodyService, private form: FormBuilder ) { }

  ngOnInit(): void {
    this.newUserForm=this.form.group({
      "username": new FormControl('',[
        Validators.required,
      ]),
      "password": new FormControl('',[
        Validators.required,
      ]),
      "firstName": new FormControl('',[
        Validators.required,
      ]),
      "lastName": new FormControl('',[
        Validators.required,
      ]),
      "email": new FormControl('',[
        Validators.required,
        Validators.email
      ]),
      "address": new FormControl('',[
        Validators.required,
      ]),
      "phoneNumber": new FormControl('',[
        Validators.required,
      ]),
      "role": {
        "id": null,
        "name": ''
      },
    })
    this.appService.getAllRoles().subscribe(roles=>this.roles=roles)

  }

  addNewUser(value: any){
    this.newUser= value
    console.log("this is new user "+ JSON.stringify(this.newUser));
    
    this.appService.addNewUser(this.newUser).subscribe()
  }

  

}

export interface User{
  "username": String,
  "password": String,
  "firstName": String,
  "lastName": String,
  "email": String,
  "address": String,
  "phoneNumber": String,
  "role": {
    "id": Number,
    "name": String
  }
}
