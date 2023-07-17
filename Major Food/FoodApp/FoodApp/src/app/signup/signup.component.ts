import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LoginComponent } from '../login/login.component';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  // password:string="";
  showPassword:boolean=false;
  togglePassword(){
    this.showPassword=!this.showPassword
  }
  emailExist:boolean=false;

  constructor(private userService:UserServiceService, private matSnackBar:MatSnackBar, private dialog :MatDialog){}
  registerForm=new FormGroup({
    "emailID":new FormControl('',[Validators.required,Validators.pattern("^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$")]),
    "name":new FormControl('',[Validators.required,Validators.pattern(/^[a-zA-Z ]+$/)]),
    "password":new FormControl('',[Validators.required,Validators.pattern(/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/)]),
    "location":new FormControl('',[Validators.required,Validators.pattern(/^[a-zA-Z ]+$/)]),
    "mobileNo":new FormControl('', [Validators.pattern(/^[789]\d{9,9}$/)])
  })

  get password() { return this.registerForm.get("password"); }
  get emailID() { return this.registerForm.get("emailID"); }
  get name() { return this.registerForm.get("name"); }
  get mobileNo() { return this.registerForm.get("mobileNo"); }
  get location(){return this.registerForm.get("location");}

  registerUser(){
    this.userService.registerUser(this.registerForm.value).subscribe(
      response=>{
        console.log(response);
        this.matSnackBar.open('Registred Successfully', 'success', {
          duration: 5000,
          panelClass: ['mat-toolbar', 'mat-primary']
        });
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
  submitStatus:boolean=false;
  canDeactive(){
    if(!this.submitStatus){
      this.submitStatus=confirm("You are not Logged in, are you want to leave? ");
    }
    return this.submitStatus;
  }

  ngOnInit(): void {
  }

}
