import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NeoServiceService {

  constructor(private httpClient:HttpClient) { }
  PersonAdded(data:any){
    return this.httpClient.post("http://localhost:8084/person/like",data);
  }
}
