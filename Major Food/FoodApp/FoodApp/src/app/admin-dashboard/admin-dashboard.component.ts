import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { RestaurantService } from '../restaurant.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  constructor(private dialog : MatDialog, private restaurantService : RestaurantService,private router:Router){
    this.getAllRestaurants();
    this.restaurantService.getUserDetails().subscribe(
      response => {
        this.userDetails=response;
        console.log(this.userDetails)
      });
      this.getDetails();
  }
  allRestaurants:any;
  restaurantName:any;
  imageURL:any;
  userDetails:any
  count:number=0
  requestDetails:any;
  logout(){
    localStorage.removeItem('jwt');
    this.router.navigateByUrl('');
  }
  getAllRestaurants(){
    this.restaurantService.getAllRestaurants().subscribe(
      response => {
        console.log(response);
        this.allRestaurants=response;
        this.restaurantName=response;
        // for(let r of this.allRestaurants){
        //   if(r.name=="A2B Restaurant"){
        //     this.imageURL="../../assets/shutterstock_649541308_20191010160155.png";
        //   }
        //   else{
        //     this.imageURL="../../assets/istockphoto-857927726-170667a.jpg"
        //   }
        // }
      }
    )
  }

  deleteRestaurant(restaurantName:any){
    this.restaurantService.deleteRestaurant(restaurantName).subscribe(
      response => {
        console.log(response);
        alert("Restaurant Deleted Successfully.")
        this.getAllRestaurants();
      }
    )
  }
  getDetails(){
    this.restaurantService.getRequests().subscribe(
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

}
