import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { RestaurantService } from '../restaurant.service';
import { UserServiceService } from '../user-service.service';
@Component({
  selector: 'app-request-view',
  templateUrl: './request-view.component.html',
  styleUrls: ['./request-view.component.css']
})
export class RequestViewComponent implements OnInit {
  requestDetails:any;
  userDetails:any;
  count:number=0;
  constructor(private resService:RestaurantService,private userService:UserServiceService,private matSnackBar:MatSnackBar,private router:Router)
  {
    this.getDetails()
    this.resService.getUserDetails().subscribe(
      response => {
        this.userDetails=response;
        console.log(this.userDetails)
      });
   }
   getDetails(){
    this.resService.getRequests().subscribe(
      response => {
        this.requestDetails=response;
        console.log(this.requestDetails);
        for(let r of this.requestDetails){
          this.count++
        }
      }
    )
   }
  ngOnInit(): void {
  }
  acceptRequest(emailID:any){
    this.resService.deleteRequest(emailID).subscribe(
      response => {
        console.log(response);
      }
    )
    this.userService.updateOwner(emailID).subscribe(
      response => {
        console.log(response);
        this.getDetails()
        this.matSnackBar.open('Update Success', 'success', {
          duration: 5000,
          panelClass: ['mat-toolbar', 'mat-primary']
        });
      }
    )
  }
  logout(){
    localStorage.removeItem('jwt');
    this.router.navigateByUrl('')
  }
  geBack(){
    this.router.navigateByUrl('/adminView')
  }
}