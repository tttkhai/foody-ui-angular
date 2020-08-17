import { User } from './../models/User';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  url='http://localhost:8081/api/'

  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;


  constructor(private http: HttpClient) { 
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser=this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): User{
    return this.currentUserSubject.value;
  }

  register(user: any){
    return this.http.post(this.url+'newUser', user, {headers:{skip:"true"}}).pipe(
      catchError((error) => {
        return throwError(error);
      })
    )
  }

  login(username: string, password: string): Observable<User> {
    return this.http.post<User>(this.url+'login', {username, password}, {headers:{skip:"true"}}).pipe(
      map((user)=>{
        if(user && user.token){
          localStorage.setItem('currentUser', JSON.stringify(user));
          this.currentUserSubject.next(user);
        }
        return user;
      }),
      catchError((error) => {  
        return throwError(error);
      })
    )
  }

  logout(){
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }

  getAllRoles(){
    return this.http.get(this.url+'roles')
  }

}
