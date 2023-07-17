import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LoginComponent } from '../login/login.component';
import { RestaurantService } from '../restaurant.service';
import { UserServiceService } from '../user-service.service';
@Component({
  selector: 'app-owner-request',
  templateUrl: './owner-request.component.html',
  styleUrls: ['./owner-request.component.css']
})
export class OwnerRequestComponent {

  showPassword:boolean=false;
  togglePassword(){
    this.showPassword=!this.showPassword
  }
  emailExist:boolean=false;
  constructor(private userService:UserServiceService, private matSnackBar:MatSnackBar, private dialog :MatDialog,private resService:RestaurantService){}
  registerForm=new FormGroup({
    "emailID":new FormControl('',[Validators.required,Validators.pattern("^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$")]),
    "name":new FormControl('',[Validators.required,Validators.pattern(/^[a-zA-Z ]+$/)]),
    "password":new FormControl('',[Validators.required,Validators.pattern(/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/)]),
    "location":new FormControl('',[Validators.required,Validators.pattern(/^[a-zA-Z ]+$/)]),
    "mobileNo":new FormControl('', [Validators.pattern(/^[789]\d{9,9}$/)])
  })
  requestForm=new FormGroup({
    "emailID":new FormControl('',[Validators.required,Validators.pattern("^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$")]),
    "resName":new FormControl('',[Validators.required,Validators.pattern(/^[a-zA-Z ]+$/)])
  })
  get emailID1(){return this.requestForm.get("emailID")}
  get resName(){return this.requestForm.get("resName")}
  get password() { return this.registerForm.get("password"); }
  get emailID() { return this.registerForm.get("emailID"); }
  get name() { return this.registerForm.get("name"); }
  get mobileNo() { return this.registerForm.get("mobileNo"); }
  sendRequest(){
    this.userService.registerUser(this.registerForm.value).subscribe(
      (      response: any)=>{
        console.log(response);
      }
    )
    this.resService.sendRequest(this.requestForm.value).subscribe(
      response => {
        console.log(response);
        this.matSnackBar.open('Request Sent Successfully', 'success', {
          duration: 5000,
          panelClass: ['mat-toolbar', 'mat-primary']
        });
        this.dialog.closeAll();
      }
    )
  }
  goToLogin(){
    const dialogRef = this.dialog.open(LoginComponent,{
      width:"600px",
      // backdropClass: "hello",
      autoFocus: false
    });
  }
}

  

