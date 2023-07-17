import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private http:HttpClient) { 

  }
  baseUrl:any="http://localhost:8082/loginUser/";

login(loginData:any){
return this.http.post(this.baseUrl+"authenticate",loginData);
}

}
