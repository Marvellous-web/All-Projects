import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { SoulmateServiceService } from '../soulmate-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
constructor(private soulmate:SoulmateServiceService,private routeService:Router)
{

}
registerForm=new FormGroup({
  "emailId": new FormControl,
  "name": new FormControl,
  "age": new FormControl,
  "gender": new FormControl,
  "city": new FormControl,
  "image": new FormControl,
  "password": new FormControl
})
signUpUser()
{
  this.soulmate.signUpUser(this.registerForm.value).subscribe(
    response=>{
      console.log(response);
      this.routeService.navigateByUrl("/dashboard")
    }
  )
}
login(){
this.routeService.navigateByUrl("/login")
}
}
