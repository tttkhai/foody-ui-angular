import { Injectable, Input } from '@angular/core';
import {HttpRequest,HttpHandler,HttpEvent,HttpInterceptor, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { FoodyService } from '../service/foody.service';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(private appService: FoodyService, private router: Router) {}
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        console.log("is login? "+ this.appService.isLogin());
        
        // if(this.appService.isLogin()){

        let token=this.appService.token || ""
        localStorage.setItem('userToken', JSON.stringify(token));

        // Retrieve the object from storage
        let userToken = localStorage.getItem('userToken');
        request = request.clone({
        setHeaders: {
            Authorization: `Bearer ${userToken}`
        }
        });
        return next.handle(request).pipe(
            tap((err: any) => {  
                if (err instanceof HttpErrorResponse) {
                    if (err.status === 401) {
                        this.router.navigate['/login']
                    }
                }
            })
        )
    }
// }

}