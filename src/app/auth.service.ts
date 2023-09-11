import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject, Subscriber } from 'rxjs';


interface LoginResponse {message:string;token: string;email: string};

@Injectable({
  providedIn: 'root'
})

export class AuthService implements OnInit {


  isAuthenticated:Boolean = false;
  userId:string = "";
  authenticationSub:Subject<Boolean> = new Subject<Boolean>()
  constructor(private router:Router,private httpClient:HttpClient) {

   }



   getToken(){
    return localStorage.getItem("token")
  }

   getUserId(){
    return localStorage.getItem("email")
   }
  getAuthStatus(){
    return this.isAuthenticated;
  }


  autoAuth(){
    const token = this.getToken()
    if (token){
     this.isAuthenticated = true;
     this.authenticationSub.next(this.isAuthenticated)

     console.log("Auth success")

    }
  }


   ngOnInit(): void {


   }

   getAuthenticationStatus(){
    return this.authenticationSub.asObservable()
   }

   login(email:string,password:string){

    this.httpClient.post<LoginResponse>("http://localhost:8081/auth/login",{email,password}).subscribe((data)=>{
      this.isAuthenticated = true;
      this.authenticationSub.next(true);
      localStorage.setItem("token",data.token)
      localStorage.setItem("email",data.email)
      this.router.navigate(["/"])
    })

  }

   register(email:string,password:string){

    this.httpClient.post("http://localhost:8081/auth/register",{email,password}).subscribe(d=>{

    this.router.navigate(["/login"])

    })

   }

   logOut(){
    this.isAuthenticated = false
    this.authenticationSub.next(false)
    localStorage.removeItem("token")
    localStorage.removeItem("email")
   }

}
