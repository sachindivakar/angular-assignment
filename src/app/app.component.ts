import { AuthService } from 'src/app/auth.service';
import { Component } from '@angular/core';
import { Post } from './posts/post.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'client';
  // posts:Post[] = []
  // onPostCreated(createdPost:Post){
  //    this.posts.push(createdPost)
  // }

  constructor(private authService:AuthService){
     this.authService.autoAuth()
  }
}
