import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TooltipPosition } from '@angular/material/tooltip';
import { LoginComponent } from '../login/login.component';
import { RestaurantService } from '../restaurant.service';
import { SignupComponent } from '../signup/signup.component';

@Component({
  selector: 'app-restaurant-dashboard',
  templateUrl: './restaurant-dashboard.component.html',
  styleUrls: ['./restaurant-dashboard.component.css']
})
export class RestaurantDashboardComponent implements OnInit {
  // display:any=document.getElementById('blur')
  isLoading:boolean=false;
  constructor(private dialog:MatDialog,private restaurantService:RestaurantService) {
    this.getAllRestaurnt();
   }

  ngOnInit(): void {
    this.isLoading = true;
  }

  openSignUp(){
    const dialogRef = this.dialog.open(SignupComponent,
      {width:"600px",backdropClass:"blur",autoFocus:false});
  }
  openLogin(){
    const dialogRef = this.dialog.open(LoginComponent,{
      width:"600px",backdropClass:"blur",autoFocus:false});
  }
  allRestaurants:any;
  restaurantName:any;
  filterName:any="";
  filteredDetails:any;
  allResCard:boolean=true;
  filterCard:boolean=false;
  selection:any="";
  filterRestaurant(){
    this.filterCard=true;
    this.allResCard=!this.allResCard;
    if(this.selection=="Location"){
      this.restaurantService.getRestaurantByLocation(this.filterName).subscribe(
        response => {
          console.log(response);
          this.filteredDetails=response;
        }
      )
    }
    else if(this.selection=="Cuisine Name"){
      this.restaurantService.getRestaurantByCuisineName(this.filterName).subscribe(
        response => {
          console.log(response);
          this.filteredDetails=response;
        }
      )
    }
    else{
      this.restaurantService.getRestaurantByItemName(this.filterName).subscribe(
        response => {
          console.log(response);
          this.filteredDetails=response;
        }
      )
    }
  }
  clear(){
    this.filterCard=false;
    this.allResCard=true;
    this.selection="";
    this.filterName="";
  }

  getAllRestaurnt(){
    this.restaurantService.getAllRestaurants().subscribe(
      response=>{
        console.log(response);
       this.allRestaurants=response;
      }
    )
  }

}
