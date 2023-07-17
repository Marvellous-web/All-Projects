import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { RestaurantService } from '../restaurant.service';

@Component({
  selector: 'app-add-restaurant-form',
  templateUrl: './add-restaurant-form.component.html',
  styleUrls: ['./add-restaurant-form.component.css']
})
export class AddRestaurantFormComponent implements OnInit {

  cuisineForm: any;
userDetails:any
constructor(private formBuilder : FormBuilder, private restaurantService : RestaurantService,
  private router:Router,private matSnackBar:MatSnackBar){
  // this.addCuisineField();
  this.restaurantService.getUserDetails().subscribe(
    response => {
      this.userDetails=response;
      console.log(this.userDetails)
    });
}
firstFormGroup = this.formBuilder.group({
  name: ['', Validators.required],
  ownerEmailID:['',Validators.required],
  location:['',Validators.required],
  cuisines:this.formBuilder.array
});
secondFormGroup = this.formBuilder.group({
  cuisineName:['',Validators.required],
  secondCtrl: ['', Validators.required],
});

isLinear = false;
cuisineName:any;
restaurantName:any;
// sendCuisine(){
//   console.log(this.cuisineName)
// this.restaurantService.addCuisine(this.restaurantName,this.cuisineName).subscribe(
//   response=>{
//     console.log(response);
//     alert("Done");
//   }
// )
// }
// addRestaurant = new FormGroup(
//   {
//     "name": new FormControl(),
//     "ownerEmailID": new FormControl(),
//     "location": new FormControl(),
//     "cuisines": this.formBuilder.array([])
//   }
// )


// addCuisineField(){
//   this.cuisineForm = new FormGroup({
//     "cuisineName": new FormControl(),
//     "items": this.formBuilder.array([])
//   });
//   (<FormArray>this.addRestaurant.controls.cuisines).push(this.cuisineForm);
//   this.addItemsField();
// }

// addItemsField(){
//   let itemsForm = new FormGroup({
//     "itemName": new FormControl(),
//     "price": new FormControl()
//   });
//   (<FormArray>this.cuisineForm.controls.items).push(itemsForm);
// }

// getControls1(){
//   return (<FormArray>this.addRestaurant.controls.cuisines).controls;
// }

// getControls2(){
//   return (<FormArray>this.cuisineForm.controls.items).controls;
// }

// addRestaurantToDB(){
//   this.restaurantService.addNewRestaurant(this.addRestaurant.value).subscribe(
//     response => {
//       console.log(response);
//       alert("Restuarant Added SuccesFully");
//       this.router.navigateByUrl("/adminView")
//   })
// }
profile:File | undefined;
addRestaurant=new FormGroup({
  "name":new FormControl(),
  "ownerEmailID":new FormControl(),
  "location":new FormControl(),
  "restImage":new FormControl()
});
onFileChanged(event:any){
  this.profile=event.target.files[0];
}
addRestaurantToDB(){
  this.restaurantService.addNewRestaurant(this.addRestaurant.value,this.profile).subscribe(
    response=>{
      console.log(response);
      // alert("Restuarant Added SuccesFully");
      this.matSnackBar.open('Restuarant Added SuccesFully', 'success', {
        duration: 3000,
        panelClass: ['mat-toolbar', 'mat-primary']
      });
      // this.toastr.success("Restuarant Added SuccesFully","Success");
      this.router.navigateByUrl("/adminView")
    }
  )
}
geBack(){
  this.router.navigateByUrl('/adminView')
}
logout(){
  localStorage.removeItem('jwt');
  this.router.navigateByUrl('')
}
  ngOnInit(): void {
  }

}
