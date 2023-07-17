import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RestaurantService } from '../restaurant.service';

@Component({
  selector: 'app-restaurant-details',
  templateUrl: './restaurant-details.component.html',
  styleUrls: ['./restaurant-details.component.css']
})
export class RestaurantDetailsComponent implements OnInit {

  restaurantName:any;
  restaurantDetails:any;
  showItems:boolean=false;
  constructor(private restaurantService : RestaurantService,private route : ActivatedRoute,private router:Router ){

    this.route.params.subscribe(
      params => {
        console.log(params['name']);
        this.restaurantName=params['name'];
        this.getRestaurantByName(this.restaurantName);
      });
      }

  getRestaurantByName(restaurantName:any){
    this.restaurantService.getRestaurantByName(this.restaurantName).subscribe(
      response => {
          console.log(response);
          this.restaurantDetails=response;
      }
    )
  }

  show(){
    this.showItems=!this.showItems;
  }
  gotohomepage(){
    this.router.navigateByUrl("");
  }


  ngOnInit(): void {
  }

}
