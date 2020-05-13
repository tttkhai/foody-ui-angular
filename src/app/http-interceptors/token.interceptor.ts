import { Injectable, Input } from '@angular/core';
import {HttpRequest,HttpHandler,HttpEvent,HttpInterceptor, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { FoodyService } from '../service/foody.service';
import { Observable } from 'rxjs';
import { Token } from '../login-page/login-page.component'
import { tap, catchError } from 'rxjs/operators';
import 'rxjs/add/operator/do';


@Injectable()
export class TokenInterceptor implements HttpInterceptor {
    @Input token: Token
  constructor(private appService: FoodyService) {}
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        localStorage.setItem('userToken', JSON.stringify(token));

        // Retrieve the object from storage
        var userToken = localStorage.getItem('userToken');
        request = request.clone({
        setHeaders: {
            Authorization: `Bearer ${userToken}`
        }
        });
        return next.handle(request).pipe(
            tap((event: HttpEvent<any>) => {
                if (event instanceof HttpResponse) {
                }
            }, (err: any) => {
                if (err instanceof HttpErrorResponse) {
                    if (err.status === 401) {
                        
                    }
                }
        })
        )
    }
}