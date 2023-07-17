import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddRestaurantFormComponent } from './add-restaurant-form/add-restaurant-form.component';
import { AddRestaurantComponent } from './add-restaurant/add-restaurant.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { CartComponentComponent } from './cart-component/cart-component.component';
import { EditRestaurantComponent } from './edit-restaurant/edit-restaurant.component';
import { EditUserDetailsComponent } from './edit-user-details/edit-user-details.component';
import { FeedbackFormComponent } from './feedback-form/feedback-form.component';
import { AdminGuard } from './guards/admin.guard';
import { AuthGuard } from './guards/auth.guard';
import { OwnerGuard } from './guards/owner.guard';
import { UserGuard } from './guards/user.guard';
import { OwnerDashboardComponent } from './owner-dashboard/owner-dashboard.component';
import { PlaceOrderComponent } from './place-order/place-order.component';
import { RestaurantDashboardComponent } from './restaurant-dashboard/restaurant-dashboard.component';
import { RestaurantDetailsComponent } from './restaurant-details/restaurant-details.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserfavouriteRestListComponent } from './userfavourite-rest-list/userfavourite-rest-list.component';
import { RequestViewComponent } from './request-view/request-view.component';

const routes: Routes = [
  {path:'',component:RestaurantDashboardComponent},
  {path:'restaurantDetails/:name',component:RestaurantDetailsComponent},
  {path:'addRestaurant',component:AddRestaurantComponent},
  {path:'addResForm',component:AddRestaurantFormComponent,canActivate:[AuthGuard,AdminGuard]},
  {path:'userView',component:UserDashboardComponent,canActivate:[AuthGuard,UserGuard]},
  {path:"cartView/:name",component:CartComponentComponent,canActivate:[AuthGuard,UserGuard]},
  {path:"placeOrder",component:PlaceOrderComponent,canActivate:[AuthGuard,UserGuard]},
  {path:"editUserDetails/:emailID",component:EditUserDetailsComponent,canActivate:[AuthGuard]},
  {path:'adminView',component:AdminDashboardComponent,canActivate:[AuthGuard,AdminGuard]},
  {path:"userPage",component:UserDetailsComponent,canActivate:[AuthGuard,AdminGuard]},
  {path:"userFav",component:UserfavouriteRestListComponent,canActivate:[AuthGuard,UserGuard]},
  {path:"ownerView",component:OwnerDashboardComponent,canActivate:[AuthGuard,OwnerGuard]},
  {path:"feedback",component:FeedbackFormComponent,canActivate:[AuthGuard,UserGuard]},
  {path:"editRestaurant/:name",component:EditRestaurantComponent,canActivate:[AuthGuard,OwnerGuard]},
  {path:"requestView",component:RequestViewComponent,canActivate:[AuthGuard,AdminGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
