import { HttpInterceptorFn } from '@angular/common/http';

// export const customInterceptor: HttpInterceptorFn = (req, next) => {
//   debugger;
//   intercept
//   const token = localStorage.getItem("token");
//   if(token){
//     const clonedReq = req.clone({
//       setHeaders: { Authorization: `Bearer ${token}` }
//     })
//   }
//   return next.handle(clonedReq);
// };


import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()

export class customInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Get the token from localStorage or any other storage
    const token = localStorage.getItem('token');

    // Clone the request and add the authorization header
    let authReq = req;
    if (token) {
      authReq = req.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      });
    }

    return next.handle(authReq);
  }
}
