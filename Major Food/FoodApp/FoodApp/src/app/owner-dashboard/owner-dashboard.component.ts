import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestaurantService } from '../restaurant.service';

@Component({
  selector: 'app-owner-dashboard',
  templateUrl: './owner-dashboard.component.html',
  styleUrls: ['./owner-dashboard.component.css']
})
export class OwnerDashboardComponent implements OnInit {

  restaurantDetails:any;
  userDetails:any=undefined;
  userLocationRes:any;

  constructor(private restaurantService: RestaurantService,private router: Router){
    this.restaurantService.getUserDetails().subscribe(
      response => {
        this.userDetails=response;
      });
    this.restaurantService.getRestaurantByOwner().subscribe(
      response => {
        console.log(response);
        this.restaurantDetails=response;
      }
    )
  }
  logout(){
    localStorage.removeItem('jwt');
    this.router.navigateByUrl('');
  }
  gotohomepage(){
    this.router.navigateByUrl('');
  }

  ngOnInit(): void {
  }

}
