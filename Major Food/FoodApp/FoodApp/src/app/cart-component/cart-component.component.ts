import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { RestaurantService } from '../restaurant.service';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-cart-component',
  templateUrl: './cart-component.component.html',
  styleUrls: ['./cart-component.component.css']
})
export class CartComponentComponent implements OnInit {

  resName:any;
  resDetails:any;
  userDetails:any;
  showItems:boolean=false;
  showCart:boolean=false;
  count:number=0;
  constructor(private resService : RestaurantService,private userService : UserServiceService,
    private route : ActivatedRoute,private router:Router,private matSnackBar:MatSnackBar){
      this.route.params.subscribe(
        response => {
          this.resName=response['name'];
          console.log(this.resName);
        }
      )
      this.resService.getRestaurantByName(this.resName).subscribe(
        response => {
          this.resDetails=response;
        }
      )
      this.getUserDetails()

  }
  getUserDetails(){
    this.resService.getUserDetails().subscribe(
      response => {
        this.userDetails=response;
      }
    )
  }

  show(){
    this.showItems=!this.showItems;
  }

  itemList:string[]=[]

  addToCart(items:any){
    // if(!this.itemList.includes(items)){
    //   this.itemList.push(items)
    // }
    this.resService.addToCart(items).subscribe(
      response => {
        console.log(response);
        // this.itemList=items
        this.count=this.count+1;
        this.getUserDetails();
        this.showCart=true;
        console.log(items)
        this.matSnackBar.open('Item Added', 'success', {
          duration: 1000,
          panelClass: ['mat-toolbar', 'mat-primary']
        });
      }
    )
  }


  ngOnInit(): void {
  }
  logout(){
    localStorage.removeItem('jwt')
    this.router.navigateByUrl('')
  }
  goBack(){
    this.router.navigateByUrl("/userView")
  }
}
