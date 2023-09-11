import { PageEvent } from '@angular/material/paginator';
import { PostService } from '../../posts.service';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {  Subscription } from 'rxjs';
import { Post } from 'src/app/posts/post.model';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit, OnDestroy {


  // @Input() postList:Post[] = []
  authSubscription:Subscription = new Subscription()
 isAuthenticated:Boolean = false;
 postList:Post[] = []
 postsSub: Subscription = new Subscription();
 isLoading: Boolean = false;
 currentPage:number = 1;
 totalPosts:number= 0 ;
 offset: number = 2;
 pageSizeOptions:number[]=[2,5,10]
 constructor(public postService: PostService, public router:Router,public authService:AuthService){}



 ngOnInit(): void {
  this.postService.getPosts(this.offset,this.currentPage);
  this.isLoading = true;
  this.isAuthenticated = this.authService.getAuthStatus()
  this.authSubscription = this.authService.getAuthenticationStatus().subscribe(status=>{
    this.isAuthenticated = status;
  })
  this.postsSub = this.postService.getPostsSubscription().subscribe((data:{posts:Post[];pagination:{
    total: number;
    offset: number;
    page: number;
  }})=>{
    this.postList = data.posts;
    this.totalPosts = data.pagination.total
  this.isLoading = false;
    // setTimeout(()=>{
    //   this.isLoadi;ng = false
    // },1000)
  });

 }

 ngOnDestroy(): void {
   this.postsSub.unsubscribe()
   this.authSubscription.unsubscribe()
 }

 onChangePage(page:PageEvent){
  console.log(page,"page change");
  this.isLoading = true;
  this.currentPage = page.pageIndex;
  this.offset = page.pageSize;
  this.postService.getPosts(this.offset,this.currentPage + 1)
}

 deletePostById(id: string){
   this.postService.deletePostById(id)
   this.postService.getPosts(this.offset,this.currentPage)
 }

 editPostById(id: string){
  console.log(id)
  this.router.navigate(["/edit",id])
 }

}
