import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private authService:AuthService){}

onLogin(loginForm: NgForm){
     if(loginForm.valid){
      this.authService.login(loginForm.value.email,loginForm.value.password)
     }
}
}
