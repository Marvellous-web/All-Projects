import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserServiceService } from '../user-service.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  constructor(private userService:UserServiceService,private router:Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(this.userService.isAdminView()){
        return true
      }else if(this.userService.isUserView()){
        this.router.navigateByUrl("/userView");
        return false
      }else if(this.userService.isOwnerView()){
        this.router.navigateByUrl("/ownerView")
        return false
      }
      return false;
    }
}
