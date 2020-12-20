export interface User{
    "id": Number,
    "username": String,
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

  export interface UserAuthentication{
    "id": Number,
    "firstName": String,
    "lastName": String,
    "token": String
  }