import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { RestaurantService } from '../restaurant.service';

@Component({
  selector: 'app-place-order',
  templateUrl: './place-order.component.html',
  styleUrls: ['./place-order.component.css']
})
export class PlaceOrderComponent implements OnInit {
  userDetails:any;
  bill:number=0;
  cartItems:any;
  fudId:any[]=[];
  orders:any[]=[];
  count:any=0;
  foodName:any;
  total:any=0;
  constructor(private resService: RestaurantService, private router: Router,private matSnackBar:MatSnackBar){

    // this.resService.getUserDetails().subscribe(
    //   response => {
    //     this.userDetails=response;
    //     this.cartItems=this.userDetails.cartItems;
    //     console.log(this.cartItems);
    //     for(let items of this.cartItems){
    //       if(this.fudId.indexOf(items.itemName)<0){
    //         for(let ite of this.cartItems){
    //           if(items.itemName==ite.itemName){
    //             this.count++;
    //           }
    //         }
    //         this.fudId.push(items.itemName);
    //         this.foodName=items.itemName;
    //         const ordr=new Order();
    //         ordr.itemName1=this.foodName;
    //         ordr.quantity=this.count;
    //         ordr.price=parseInt(items.price);
    //         ordr.totalPrice=ordr.quantity*ordr.price;
    //         this.total=this.total+ordr.totalPrice;
    //         this.orders.push(ordr);
    //         this.count=0;
    //       }
    //     }
    //   }
    // )
    // this.billAmount();
    this.getDetails();
  }
  getDetails(){
    this.resService.getUserDetails().subscribe(
      response => {
        this.userDetails=response;
        this.cartItems=this.userDetails.cartItems;
        console.log(this.cartItems);
        for(let items of this.cartItems){
          if(this.fudId.indexOf(items.itemName)<0){
            for(let ite of this.cartItems){
              if(items.itemName==ite.itemName){
                this.count++;
              }
            }
            this.fudId.push(items.itemName);
            this.foodName=items.itemName;
            const ordr=new Order();
            ordr.itemName1=this.foodName;
            ordr.quantity=this.count;
            ordr.price=parseInt(items.price);
            ordr.totalPrice=ordr.quantity*ordr.price;
            this.total=this.total+ordr.totalPrice;
            this.orders.push(ordr);
            this.count=0;
          }
        }
      }
    )
  }

  removeCartItem(itemName:any,price:any){
    this.resService.removeFromCart(itemName,price,this.userDetails).subscribe(
      response => {
        // console.log(item)
        this.userDetails=response;
        window.location.reload();
      }
    )
  }

  // billAmount(){
  //   this.resService.calculateBill(this.userDetails).subscribe(
  //     (response: any)=>{
  //       console.log(response);
  //     }
  //   )
  // }

  placeOrder(){
    this.resService.placeOrder().subscribe(
      response => {
        this.userDetails=response;
        console.log(response);
        this.matSnackBar.open('Order Placed Successfully 🍕. Total amount to be paid : Rs. ' + this.total, 'success', {
          duration: 5000,
          panelClass: ['mat-toolbar', 'mat-primary']
        });
        this.router.navigateByUrl('/userView');

      }
    )
  }
  addQuantity(itemName:any,price:any){
    this.resService.addQuantity(itemName,price,this.userDetails).subscribe(
      response=>{
        this.userDetails=response;
        window.location.reload();
      }
    )
  }
  logout(){
    this.router.navigateByUrl("")
  }
  goBack(){
    this.router.navigateByUrl('/userView')
  }
  ngOnInit(): void {
  }

}
class Order{
itemName1:any='';
quantity:any=0;
price:any=0;
totalPrice:any=0
  }
