import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient:HttpClient) { }
  userBaseUrl="http://localhost:4444/authentication-app"

  signupUser(signupData:any){
    return this.httpClient.post(this.userBaseUrl+"/signup-user",signupData);
  }

  loginUser(loginData:any){
    return this.httpClient.post(this.userBaseUrl+"/check-login",loginData);
  }

  
}
