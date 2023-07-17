import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { RestaurantService } from '../restaurant.service';

@Component({
  selector: 'app-edit-restaurant',
  templateUrl: './edit-restaurant.component.html',
  styleUrls: ['./edit-restaurant.component.css']
})
export class EditRestaurantComponent implements OnInit {
  restaurantName:any;
  restaurantDetails:any;
  showItems:boolean=false;
  cuisineForm: any;
  count:any;
  show:boolean=false;
  show1:boolean=false;
  userDetails:any=undefined;
  showItemForm(){
    this.show1=!this.show1
  }
  showItem(){
    this.show=!this.show;
  }
  constructor(private restaurantService : RestaurantService,private route: ActivatedRoute,
    private formBuilder: FormBuilder,private router:Router,private snackbar:MatSnackBar)
    {
      this.route.params.subscribe(
        params => {
          console.log(params['name']);
          this.restaurantName=params['name'];
          this.getRestaurantByName(this.restaurantName);
        });
        this.restaurantService.getUserDetails().subscribe(
          response => {
            this.userDetails=response;
          });
        // this.restaurantService.getRestaurantByOwner().subscribe(
        //   response => {
        //     console.log(response);
        //     this.restaurantDetails=response;
        //   }
        // )
      }
      getRestaurantByName(restaurantName:any){
        this.restaurantService.getRestaurantByName(restaurantName).subscribe(
          response => {
            console.log(response);
            this.restaurantDetails=response;
          }
        )
      }
cuisineName:any
sendCuisine(){
  console.log(this.cuisineName)
this.restaurantService.addCuisine(this.restaurantName,this.cuisineName).subscribe(
  response=>{
    console.log(response);
    this.getRestaurantByName(this.restaurantName);
    this.snackbar.open('Cuisine Added Successfully.', 'success', {
      duration: 2000,
      panelClass: ['mat-toolbar', 'mat-primary']
    });
  }
)
}
  ngOnInit(): void {
  }
itemForm=new FormGroup({
  "itemName":new FormControl(),
  "price":new FormControl(),
  "itemImage":new FormControl()
})
image:File|undefined;
onFileChanged(event:any){
  this.image=event.target.files[0];
}
sendItems(cuisineName:any){
  this.restaurantService.addItemsToCuisines(this.restaurantName,cuisineName,this.itemForm.value,this.image).subscribe(
    response=>{
      console.log(response);
      // alert("added succesfully");
      this.snackbar.open('Item Added Successfully 🍕.', 'success', {
        duration: 2000,
        panelClass: ['mat-toolbar', 'mat-primary']
      });
      this.show1=false
      this.getRestaurantByName(this.restaurantName);
      this.itemForm.controls.itemName.reset();
      this.itemForm.controls.price.reset();
    }
  )
}

removeCuisine(c:any){
  console.log(c)
  this.restaurantService.removeCuisine(this.restaurantName,c).subscribe(
    response=>{
      console.log(response);
      // alert("Removed Cuisine succesfully");
      this.snackbar.open('Cuisine Removed Successfully.', 'success', {
        duration: 2000,
        panelClass: ['mat-toolbar', 'mat-primary']
      });
      this.getRestaurantByName(this.restaurantName);
    }
  )
}

removeItems(c:any,i:any){
  this.restaurantService.removeItems(this.restaurantName,c,i).subscribe(
    response=>{
      console.log(response);
      // alert("Removed Items Succesfully");
      this.snackbar.open('Item Removed Successfully.', 'success', {
        duration: 2000,
        panelClass: ['mat-toolbar', 'mat-primary']
      });
      this.getRestaurantByName(this.restaurantName);
    }
  )
}
goToOwnerView(){
  this.router.navigateByUrl('/ownerView');
}

logout(){
  localStorage.removeItem('jwt');
  this.router.navigateByUrl('');
}

}
