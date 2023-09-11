import { AuthService } from './../../auth.service';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  constructor(private authService:AuthService){}

  signUp(signUp: NgForm){
       if(signUp.valid){
        this.authService.register(signUp.value.email,signUp.value.password)
       }
  }
}
