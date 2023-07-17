import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SoulmateServiceService {

  constructor(private httpClient:HttpClient) { }
  baseUrl:any="http://localhost:8081/soul-mate/";
  signUpUser(singUpData:any){
    
    return this.httpClient.post(this.baseUrl+"signUpUser",singUpData);
  }
  getUserDetails(){
    return this.httpClient.get("http://localhost:8081/soul-mate/getUser");
  }

}
