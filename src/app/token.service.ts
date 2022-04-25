import {  HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class TokenService implements HttpInterceptor{

  constructor() { }
intercept(req: HttpRequest<any>, next: HttpHandler){
   let tokenizedRequest = req.clone({
     setHeaders:{
       Authorization: 'Bearer '+localStorage.getItem('jwt-token')
     }
   });
   return next.handle(tokenizedRequest);
}


}
