import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RestaurantDashboardComponent } from './restaurant-dashboard/restaurant-dashboard.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import{HttpClientModule} from '@angular/common/http';
import { SignupComponent } from './signup/signup.component';
import {MatCardModule} from '@angular/material/card';
import {MatMenuModule} from '@angular/material/menu';
import{MatSnackBarModule} from '@angular/material/snack-bar';
import {MatButtonModule} from '@angular/material/button';
import { MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatChipsModule} from '@angular/material/chips';
import {MatSelectModule} from '@angular/material/select';
import {MatDialogModule} from '@angular/material/dialog';
import {MatToolbarModule} from '@angular/material/toolbar';
import { LoginComponent } from './login/login.component';
import { RestaurantDetailsComponent } from './restaurant-details/restaurant-details.component';
import { AddRestaurantComponent } from './add-restaurant/add-restaurant.component';
import { AddRestaurantFormComponent } from './add-restaurant-form/add-restaurant-form.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { CartComponentComponent } from './cart-component/cart-component.component';
import { PlaceOrderComponent } from './place-order/place-order.component';
import { EditUserDetailsComponent } from './edit-user-details/edit-user-details.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import {MatTableModule} from '@angular/material/table';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserfavouriteRestListComponent } from './userfavourite-rest-list/userfavourite-rest-list.component';
import {MatExpansionModule} from '@angular/material/expansion';
import { FeedbackFormComponent } from './feedback-form/feedback-form.component';
import { EditRestaurantComponent } from './edit-restaurant/edit-restaurant.component';
import {MatStepperModule} from '@angular/material/stepper';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatRippleModule} from '@angular/material/core';
import {MatBadgeModule} from '@angular/material/badge';
import { OwnerDashboardComponent } from './owner-dashboard/owner-dashboard.component';
import {MatRadioModule} from '@angular/material/radio';
import { OwnerRequestComponent } from './owner-request/owner-request.component';
import { RequestViewComponent } from './request-view/request-view.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RestaurantDashboardComponent,
    SignupComponent,
    LoginComponent,
    RestaurantDetailsComponent,
    AddRestaurantComponent,
    AddRestaurantFormComponent,
    UserDashboardComponent,
    CartComponentComponent,
    PlaceOrderComponent,
    EditUserDetailsComponent,
    AdminDashboardComponent,
    UserDetailsComponent,
    UserfavouriteRestListComponent,
    OwnerDashboardComponent,
    FeedbackFormComponent,
    EditRestaurantComponent,
    OwnerRequestComponent,
    RequestViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,MatTableModule,
    BrowserAnimationsModule,HttpClientModule,FormsModule,ReactiveFormsModule,MatSnackBarModule,
    MatButtonModule,MatFormFieldModule,MatInputModule,MatIconModule,MatCardModule,MatChipsModule,MatSelectModule,
    MatMenuModule,MatToolbarModule,MatDialogModule,MatExpansionModule,MatStepperModule,MatTooltipModule,MatRippleModule,
    MatBadgeModule,MatRadioModule,MatCheckboxModule,MatProgressSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
