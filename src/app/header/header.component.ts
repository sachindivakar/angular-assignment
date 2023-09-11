import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy{
  isAuthenticated:Boolean = false;
  authSubscription:Subscription = new Subscription()
  constructor(private authService:AuthService){

 }
 ngOnInit(): void {
   this.isAuthenticated = this.authService.getAuthStatus();
   this.authSubscription = this.authService.getAuthenticationStatus().subscribe(status=>{
    this.isAuthenticated = status;
  })
 }
 logOut(){
  this.authService.logOut();
 }

 ngOnDestroy(): void {
   this.authSubscription.unsubscribe()
 }

}
