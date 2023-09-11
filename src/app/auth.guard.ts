import { Inject, Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateFn,  Router,  RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate {


  constructor(private authService:AuthService,private router:Router){

  }
  canActivate(route:ActivatedRouteSnapshot, state:RouterStateSnapshot):boolean | Observable<boolean> | Promise<boolean > {
      const isAuthenticated = this.authService.getAuthStatus();
      if(!isAuthenticated){
        this.router.navigate(["/login"])
      }
    return isAuthenticated as boolean | Observable<boolean> | Promise<boolean >;
  }

}
