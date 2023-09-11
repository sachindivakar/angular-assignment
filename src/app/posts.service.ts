import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Subject } from 'rxjs';

import { Post } from './posts/post.model';
import { Router } from '@angular/router';
import { PageEvent } from '@angular/material/paginator';


interface PostResponse {message: string;
   status: string;
   result: Post}
interface GetPostByIdResponse {message: string;
  status: string;
  result: Post}
interface GetPostsResponse {message: string;
  status: string;
  result: {
    posts:Post[],
    pagination:{
      total: number;
      offset: number;
      page: number;
    }
  }}

  interface UpdatePostByIdResponse {message: string;
    status: string;
    result: Post}

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private httpClient :HttpClient, private router: Router) { }

  posts:Post[]=[];
  postsSubscription: Subject<{posts:Post[];pagination:{
    total: number;
    offset: number;
    page: number;
  }}> = new Subject()
  postSubscription: Subject<Post> = new Subject()
  post?:Post;
  getPosts(offset:number,pageNumber: number){
    this.httpClient.get<GetPostsResponse>(`http://localhost:8081/posts?offset=${offset}&page=${pageNumber}`).subscribe((data)=>{
    this.posts = data.result.posts;
    this.postsSubscription.next({posts:[...this.posts],pagination:data.result.pagination})
    console.log("This",this.posts)
    })
  }

  getPostById(id: string){
    this.httpClient.get<GetPostByIdResponse>(`http://localhost:8081/posts/${id}`).subscribe((data)=>{
      this.post = data.result;
      this.postSubscription.next({...this.post})
      console.log("This",this.post)
      })
  }

  getUpdatePayload(updatedPost: Post){
    if (typeof updatedPost.image === "object"){
      const formData = new FormData();
      formData.append('image',updatedPost.image,updatedPost.title)
      formData.append('content',updatedPost.title)
      formData.append('title',updatedPost.title)
      return formData;
   }

   return updatedPost

  }

  updatePostById(id: string,updatedPost: Post){



    this.httpClient.patch<UpdatePostByIdResponse>(`http://localhost:8081/posts/${id}`,this.getUpdatePayload(updatedPost)).subscribe((data)=>{
      this.router.navigate(["/"]);
      })

  }

  deletePostById(id: string){
    this.httpClient.delete<GetPostByIdResponse>(`http://localhost:8081/posts/${id}`).subscribe((data)=>{
      this.post = data.result;
      })
  }

  getPostsSubscription(){
    return this.postsSubscription.asObservable()
  }

  getPostSubscription(){
    return this.postSubscription.asObservable()
  }

  addPosts(createdPost:{content:string;title: string, image: Blob}){
    const formData = new FormData()
    formData.append('image',createdPost.image,createdPost.title)
    formData.append('content',createdPost.title)
    formData.append('title',createdPost.title)


    this.httpClient.post<PostResponse>("http://localhost:8081/posts",formData).subscribe((data)=>{
    this.posts.push(data.result)
    this.router.navigate(["/"]);
    })
  }

}
