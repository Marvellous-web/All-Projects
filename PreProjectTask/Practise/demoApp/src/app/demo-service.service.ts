import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DemoServiceService {

  constructor() { }
  getData(){
   return alert("hello prateek");
  }
}
