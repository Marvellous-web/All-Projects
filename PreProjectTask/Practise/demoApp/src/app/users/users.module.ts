import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { User1Component } from './user1/user1.component';



@NgModule({
  declarations: [
    User1Component
  ],
  imports: [
    CommonModule
  ],
  exports:[User1Component]
})
export class UsersModule { }
