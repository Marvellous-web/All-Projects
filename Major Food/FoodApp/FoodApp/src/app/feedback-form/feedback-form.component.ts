import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { RestaurantService } from '../restaurant.service';

@Component({
  selector: 'app-feedback-form',
  templateUrl: './feedback-form.component.html',
  styleUrls: ['./feedback-form.component.css']
})
export class FeedbackFormComponent implements OnInit {
  feedback:any
  userDetails:any
  constructor(private restService:RestaurantService,private router:Router,private snackbar:MatSnackBar) {
    this.restService.getUserDetails().subscribe(
      response => {
        this.userDetails=response;
        console.log(this.userDetails)
      });
   }

  addFeedback(){
    this.restService.addFeedback(this.feedback).subscribe(
      response=>{
        console.log(response);
        this.snackbar.open('FeedBack Sent Successfully.', 'success', {
          duration: 2000,
          panelClass: ['mat-toolbar', 'mat-primary']
        });
        this.router.navigateByUrl('/userView')
      }
    )
  }
  logout(){
    this.router.navigateByUrl('')
  }
  ngOnInit(): void {
  }

}
