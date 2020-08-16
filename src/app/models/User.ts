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
    },
    token: String
  }