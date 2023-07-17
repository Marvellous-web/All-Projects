import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { RestaurantService } from '../restaurant.service';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {

  userDetails:any=undefined;
  userLocationRes:any;
  allRestaurants:any;
  restaurantName:any;
  filterName:any="";
  filteredDetails:any;
  locationCard:boolean=true;
  filterCard:boolean=false;
  selection:any;
  allCard:boolean=true;
  constructor(private restaurantService: RestaurantService, private route : Router,private matSnackBar:MatSnackBar){
    this.restaurantService.getUserDetails().subscribe(
      response => {
        this.userDetails=response;
      }
    )
    this.restaurantService.getAllRestaurants().subscribe(
      response=>{
        console.log(response);
        this.allRestaurants=response;
      }
    )
    // this.getUserLocationRes(this.userDetails);
    }

  getUserLocationRes(location:any){
    this.allCard=false;
    console.log(location)
    this.restaurantService.getRestaurantByLocation(location).subscribe(
      response => {
        console.log(response)
        this.userLocationRes=response;
      }
    )
  }

  logout(){
    localStorage.removeItem('jwt');
    this.route.navigateByUrl("");
  }
  gotohomepage(){
    this.route.navigateByUrl("");
  }

  filterRestaurant(){
    this.allCard=false;
    this.filterCard=true;
    this.locationCard=!this.locationCard;
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
    this.locationCard=true;
    this.selection="";
    this.filterName="";
  }

  addToFavouriteList(restaurant:any){
    this.restaurantService.addToFavourites(restaurant).subscribe(
      response => {
        console.log(response);
        // alert("Added to your Favourites Successfully");
        this.matSnackBar.open('Restaurant Added to your Favourite List Successfully', 'success', {
          duration: 2000,
          panelClass: ['mat-toolbar', 'mat-primary']
        });
        // this.route.navigateByUrl("/userFav")
      }
    )
  }
  // isFavorite:boolean=false;
  // favorites=[];
  // toggleFavorite() {
  //   this.isFavorite = !this.isFavorite;
  //   if (this.isFavorite) {
  //     this.favorites.push(this.restaurant);
  //   } else {
  //     this.favorites = this.favorites.filter(favorite => favorite !== this.restaurant);
  //   }
  // }
  addEvent(x:any) {
    x.select = !x.select;
  }
  ngOnInit(): void {
  }

}
