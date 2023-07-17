import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { UserDashboardGuardGuard } from './user-dashboard-guard.guard';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';

const routes: Routes = [
  {"path":"home",component:HomeComponent},
  {"path":"signup",component:SignupComponent},
  {"path":"login",component:LoginComponent},
  {"path":"userDashboard",component:UserDashboardComponent, canActivate:[UserDashboardGuardGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
