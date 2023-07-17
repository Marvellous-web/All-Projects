import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { SignupComponent } from '../signup/signup.component';
import { OwnerRequestComponent } from '../owner-request/owner-request.component';
@Component({
  selector: 'app-add-restaurant',
  templateUrl: './add-restaurant.component.html',
  styleUrls: ['./add-restaurant.component.css']
})
export class AddRestaurantComponent implements OnInit {

  constructor(private dialog:MatDialog,private router:Router){}
  openLogin(){
    const dialogRef = this.dialog.open(LoginComponent,{width:"600px",backdropClass:"blur",autoFocus:false});
  }
  geBack(){
    this.router.navigateByUrl('')
  }
  openRequestForm(){
    const dialogRef = this.dialog.open(OwnerRequestComponent,
      {width:"600px",height:"500px",backdropClass:"blur",autoFocus:false});
  }
  openSignUp(){
    const dialogRef = this.dialog.open(SignupComponent,
      {width:"600px",backdropClass:"blur",autoFocus:false});
  }
  // openLogin(){
  //   const dialogRef = this.dialog.open(LoginComponent,{
  //     width:"600px",backdropClass:"blur",autoFocus:false});
  // }
  ngOnInit(): void {
  }

}
