import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private httpClient:HttpClient) { }
  baseUrl="http://localhost:9999/auth-app/";
  registerUser(signupData:any){
    return this.httpClient.post(this.baseUrl+"register-user",signupData).pipe(

    );
  }
  loginUser(loginData:any){
    return this.httpClient.post(this.baseUrl+"login",loginData);
  }
  recoverPassword(details:any){
    let emailID=details.emailID;
    return this.httpClient.post(this.baseUrl+'forgot-password-recovery',emailID)
  }
  updateOwner(emailID:any){
    return this.httpClient.post(this.baseUrl+"owner-update",emailID)
  }

  isLoggedIn(){
    return !!localStorage.getItem('jwt');
  }

  isUserView(){
    if(localStorage.getItem('role')=="ROLE_USER"){
      return true;
    }else return false;
  }

  isAdminView(){
    if(localStorage.getItem('role')=="ROLE_ADMIN"){
      return true;
    }else return false;
  }

  isOwnerView(){
    if(localStorage.getItem('role')=="ROLE_OWNER"){
      return true;
    }else return false;
  }
  
}
