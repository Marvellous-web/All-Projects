import { Component } from '@angular/core';
import { NeoServiceService } from '../neo-service.service';
import { SoulmateServiceService } from '../soulmate-service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  constructor(private soulService:SoulmateServiceService,private neoService:NeoServiceService)
  {
    this.getAllUser();
    
  }
  getData:any;
  getAllUser()
  {
    
  this.soulService.getUserDetails().subscribe(response=>{
    this.getData=response;
    console.log(response)
  })
}
PersonAdded(data:any){
  this.neoService.PersonAdded(data).subscribe(response=>{
    console.log(response);
    
  })

}
}
