import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  responseData:any;

  constructor(private userService:UserServiceService,private routeService:Router)
  {

  }
  loginForm=new FormGroup(
  {
    "emailId": new FormControl,
    "password":new FormControl
  }
  )
  loginUser() {
    return this.userService.login(this.loginForm.value).subscribe(
      response=>{
        console.log(response);
        this.responseData=response;
        console.log(this.responseData.token);
        localStorage.setItem("jwt",this.responseData.token);
        this.routeService.navigateByUrl("/dashboard")
      }
    )
    }
  login(){
    this.routeService.navigateByUrl("/register");
    
  }

}
