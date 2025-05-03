import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { apiUrls } from '../Configs/api_urls';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  http = inject(HttpClient);

  /* Using the below behaviour we are setting the isLoggedIn value to True and when log off to False. */
  isLoggedIn$ = new BehaviorSubject<boolean>(false);

  registerService(userObj : any) : Observable<any>{
    return this.http.post<any>(`${apiUrls.authServiceApi}Register`, userObj);
  }

  loginService(loginObj : any) : Observable<any>{
    return this.http.post<any>(`${apiUrls.authServiceApi}login`, loginObj);
  }
  
  verifyOtpService(otpObj : any) : Observable<any>{
    return this.http.post<any>(`${apiUrls.authServiceApi}verifyOtp`, otpObj);
  }

  sendResetPassLinkService(email : any) : Observable<any>{
    return this.http.post<any>(`${apiUrls.authServiceApi}sendResetLink`, email);
  }

  resetPasswordService (resetpassObj : any) : Observable<any>{
    return this.http.post<any>(`${apiUrls.authServiceApi}resetPassword`, resetpassObj);
  }

  isLoggedIn(): boolean{
  if(typeof window !== 'undefined' && window.localStorage){
    return !!localStorage.getItem("token");
  }
  return false;
  }

  logout() : void {
    return this.isLoggedIn$.next(false);
  }


  editprofile(_id: any, uspdatedUserDetails : any) : Observable<any>{
    return this.http.patch<any>(`${apiUrls.authServiceApi}updateProfile/`+_id, uspdatedUserDetails);
  }

   

}
