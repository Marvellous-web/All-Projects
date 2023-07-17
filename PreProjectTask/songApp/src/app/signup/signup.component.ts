import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private userService:UserService,private router:Router,private _snackBar:MatSnackBar) { }

  ngOnInit(): void {
  }

  signupForm=new FormGroup({
    "emailId":new FormControl('',[Validators.pattern("^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$")]),
    "password":new FormControl(),
    "name":new FormControl(),
    "mobile":new FormControl()
  });

  signupUser(){
    console.log(this.signupForm.value);
    this.userService.signupUser(this.signupForm.value).subscribe(
      response=>{
        console.log(response);
        this.router.navigateByUrl("/login");
        this._snackBar.open('Registration Suceesful', 'success', {
          duration: 5000,
          panelClass: ['mat-toolbar', 'mat-primary']
        });
      })
  }


}
