import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'client';
  // posts:Post[] = []
  // onPostCreated(createdPost:Post){
  //    this.posts.push(createdPost)
  // }
  companyName = 'Your Company Name';
  constructor(public router:Router){
  }

 // shouldDisplayMenu = false

  ngOnInit(): void {
    console.log(this.router.url)
   // this.shouldDisplayMenu = this.router.url.includes("assignments")
  }

}
