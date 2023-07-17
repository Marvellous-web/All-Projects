import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { RestaurantService } from '../restaurant.service';

@Component({
  selector: 'app-userfavourite-rest-list',
  templateUrl: './userfavourite-rest-list.component.html',
  styleUrls: ['./userfavourite-rest-list.component.css']
})
export class UserfavouriteRestListComponent implements OnInit {

  userDetails:any;
  constructor(private resService : RestaurantService,private route:Router,private matSnackBar:MatSnackBar){
    this.resService.getUserDetails().subscribe(
      response => {
        this.userDetails=response;
        console.log(response);

      }
    )
  }
  logout(){
    localStorage.removeItem('jwt');
    this.route.navigateByUrl("");
  }
  removeRest(r:any){
    this.resService.removeRestaurantFromFav(r).subscribe(
      response=>{
        console.log(response);
        this.userDetails=response;
        this.matSnackBar.open('Removed successfully', 'success', {
          duration: 2000,
          panelClass: ['mat-toolbar', 'mat-primary']
        });
      }
    )
  }
  goToUserView(){
    this.route.navigateByUrl('/userView')
  }
  ngOnInit(): void {
  }

}
