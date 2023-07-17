import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RestaurantService } from '../restaurant.service';

@Component({
  selector: 'app-edit-user-details',
  templateUrl: './edit-user-details.component.html',
  styleUrls: ['./edit-user-details.component.css']
})
export class EditUserDetailsComponent implements OnInit {

  userDetails:any;
  userEmailID:any;
  profile:File | undefined;
  emailID:any;
  name:any;
  location:any;
  mobileNo:any;
  constructor(private route : ActivatedRoute,private resService : RestaurantService,private router : Router){
    this.route.params.subscribe(
      response => {
        this.userEmailID=response['emailID'];
        console.log(this.userEmailID);
      }
    )
    this.getUserDetails();
  }

  getUserDetails(){
    this.resService.getUserDetails().subscribe(
      response => {
        this.userDetails=response;
      }
    )
  }

  userForm = new FormGroup({
    "emailID": new FormControl(),
    "name": new FormControl(),
    "role":new FormControl(),
    "location": new FormControl(),
    "mobileNo": new FormControl(),
    "profile":new FormControl()
     })

  onFileChanged(event:any){
    this.profile=event.target.files[0];
  }

  onSubmit(){
    this.resService.editUserDetails(this.userForm.value,this.profile).subscribe(
      response => {
        console.log(response);
        alert("Changes Successfully Saved");
      if(localStorage.getItem('role')=="ROLE_USER"){
        this.router.navigateByUrl("/userView");
      }else if(localStorage.getItem('role')=="ROLE_OWNER"){
        this.router.navigateByUrl("/ownerView");
      }
      else if(localStorage.getItem('role')=="ROLE_ADMIN"){
        this.router.navigateByUrl("/adminView");
      }
      }
    )
  }
  goToOwnerView(){
    this.router.navigateByUrl('/ownerView');
  }
  logout(){
    this.router.navigateByUrl('')
  }
  ngOnInit(): void {
  }

}
