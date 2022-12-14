import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HTTP_INTERCEPTORS
} from '@angular/common/http';
import { catchError, EMPTY, Observable, tap, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';

export class AuthInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let req = request;
    if (req.url.includes('api')) {
      req = req.clone({
        url: req.url.replace('api', environment.apiURL)
      })
    }
    return next.handle(req)
      .pipe(
        tap(req => {
          console.log(req);
        }),
        catchError(err => {
          if (err.status == 0) {
            console.error('UNKNOW ERROR')
            return EMPTY;
          }
          return throwError(() => err)

        })
      );
  }
}

export const authInterceptorProvider = {
  provide: HTTP_INTERCEPTORS,
  useClass: AuthInterceptor,
  multi: true
}