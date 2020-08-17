import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { AuthenticationService } from './../service/authentication.service';
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent } from '@angular/common/http';


@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
    constructor(private authService: AuthenticationService) {}
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
        if(request.headers.get("skip")){
            request = request.clone({
                headers: request.headers.delete('skip')
            });
            return next.handle(request);
        }else { 
            return next.handle(request).pipe(catchError((err)=>{
                if(err.status===401){
                    this.authService.logout();
                    location.reload(true);
                    console.log("error interceptor is being called");
                
                    const error = err.error.message || err.statusText;
                    return throwError(error);
                }               
            }))
        }
    }
}