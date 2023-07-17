import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { SignupComponent } from '../signup/signup.component';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  mailID:any;
  showPassword:boolean=false;
  togglePassword(){
    this.showPassword=!this.showPassword
  }
  constructor(private dialog : MatDialog,private userService:UserServiceService,private router : Router,private snackBar:MatSnackBar){

  }

  loginForm=new FormGroup({
    "emailID":new FormControl('',[Validators.required,Validators.pattern("^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$")]),
    "password":new FormControl('',[Validators.required])
  })
  get password() { return this.loginForm.get("password"); }
  get emailID() { return this.loginForm.get("emailID"); }

  goToSignup() {
    const dialogRef = this.dialog.open(SignupComponent,{width:"600px",backdropClass: 'dialog-bg-sky'});
  }
  responseData:any
  loginUser() {
    this.userService.loginUser(this.loginForm.value).subscribe({next:
      response=>{
        console.log(response);
        this.responseData=response
        localStorage.setItem('jwt',this.responseData.token);
        localStorage.setItem('role',this.responseData.role);
        if(this.responseData.role=="ROLE_ADMIN"){
          this.router.navigateByUrl("/adminView");
        }
        else if(this.responseData.role=="ROLE_OWNER"){
          this.router.navigateByUrl("/ownerView")
        }
        else if(this.responseData.role=="ROLE_USER"){
          this.router.navigateByUrl("/userView")
        }
        this.dialog.closeAll();
      },error:e=>this.snackBar.open(`${"Invalid Credentials"}`,"close",{
        duration:2000
      })
    })
  }

  sendEmail(){
    this.userService.recoverPassword(this.loginForm.value).subscribe(
      response =>{
        alert("Password Sent to Mail Successfully")
      }
    )
  }


  ngOnInit(): void {
  }

}
