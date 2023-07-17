import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestaurantService } from '../restaurant.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  userDetails:any
  selection:any;
  allUserDetails:any;
  filteredUserDetails:any;
  constructor(private resService : RestaurantService, private route:Router){
    this.resService.getAllUserDetails().subscribe(
      response => {
        this.allUserDetails=response;
      }
    )
    this.resService.getUserDetails().subscribe(
      response => {
        this.userDetails=response;
        console.log(this.userDetails)
      });
  }
  searchByRole(){
    if(this.selection=="User"){
      this.resService.getUserDetailsByRole("ROLE_USER").subscribe(
        response => {
          this.filteredUserDetails=response;
        }
      )
    }
    else if(this.selection=="Owner"){
      this.resService.getUserDetailsByRole("ROLE_OWNER").subscribe(
        response => {
          this.filteredUserDetails=response;
        }
      )
    }
  }
  goToAdminView(){
    this.route.navigateByUrl('/adminView');
  }
  logout(){
    localStorage.removeItem('jwt');
    this.route.navigateByUrl('');
  }
  ngOnInit(): void {
  }

}
