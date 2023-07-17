import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthServiceService } from '../auth-service.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private userService:UserService,private _snackBar:MatSnackBar,private router:Router,private authService:AuthServiceService) { }

  ngOnInit(): void {
  }

  loginForm=new FormGroup({
    "emailId": new FormControl('',[Validators.pattern("^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$")]),
    "password":new FormControl()
  })

  responseData:any;
  loginUser(){
    this.userService.loginUser(this.loginForm.value).subscribe(
      response=>{
        console.log(response);
        this.responseData=response;
        console.log(this.responseData.message);
        console.log(this.responseData.token);
        this._snackBar.open('Wel-Come!!! Login Successfully', 'success', {
          duration: 5000,
          panelClass: ['mat-toolbar', 'mat-primary']
        });
        //token and role to be sorted in browser space (cookie)
        localStorage.setItem("jwt",this.responseData.token);
        this.router.navigateByUrl("/userDashboard")
        this.authService.login();

      }
    )
  }
}
