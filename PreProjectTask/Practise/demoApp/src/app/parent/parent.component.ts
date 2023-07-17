import { Component } from '@angular/core';
import { DemoServiceService } from '../demo-service.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
  constructor(private demoService:DemoServiceService){
    
  }

  

  recive:String="";
  onsearch(data:any){
    this.recive=data;
  }

  
 

  getData1(data:any){
    console.log(data);
  }
}
