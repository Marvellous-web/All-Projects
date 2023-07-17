import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserServiceService } from '../user-service.service';

@Injectable({
  providedIn: 'root'
})
export class UserGuard implements CanActivate {
  constructor(private userService:UserServiceService,private router:Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(this.userService.isUserView()){
      return true
    }else if(this.userService.isAdminView()){
      this.router.navigateByUrl("/adminView");
      return false
    }else if(this.userService.isOwnerView()){
      this.router.navigateByUrl("/ownerView")
      return false
    }
    return false;
  }

}
