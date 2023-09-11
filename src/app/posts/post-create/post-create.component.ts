import { PostService } from './../../posts.service';
import { Component, EventEmitter , OnDestroy, OnInit, Output} from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Post } from "src/app/posts/post.model";
import { mimeType } from './mime-type.validator';

@Component({
    templateUrl:'./post-create.component.html',
    selector:'app-post-create',
    styleUrls:['./post-create.component.css']
})
export class PostCreateComponent implements OnInit,OnDestroy{

    enteredTitle:string = "";
    enteredContent: string = "";
    mode="create"
    postId :string | null = null
    form:FormGroup = new FormGroup({});
    imgPrev:string = "";
    // @Output() postCreated = new EventEmitter<Post>()
     post?: Post
     postSubscription: Subscription = new Subscription();
    isLoading:Boolean = false;
    constructor(public postService: PostService, public route: ActivatedRoute){

    }

    ngOnInit(): void {
    this.form = new FormGroup({
      'title': new FormControl(null,{validators:[Validators.required, Validators.minLength(3)]}),
      'content': new FormControl(null,{validators:[Validators.required]}),
      'image': new FormControl(null,{validators:[Validators.required],asyncValidators: [mimeType]})
    })
    this.route.paramMap.subscribe(params=>{
      if (params.has("id")){
          this.mode="edit";
          this.postId = params.get("id");
          this.postService.getPostById(this.postId as string);
          this.isLoading = true;
          this.postSubscription = this.postService.getPostSubscription().subscribe((post:Post)=>{
            this.post= post;
            this.form.setValue({
              title: post.title,
              content: post.content,
              image: post.image
            })
            this.isLoading = false;
          })
        }
      })
    }

    ngOnDestroy(): void {
      this.postSubscription.unsubscribe();
    }

    onClick = (e:Event)=>(filePicker: HTMLInputElement)=>{
         e.preventDefault();
      console.log("Clicked")
     filePicker.click()
     //e.preventDefault();
    }

    onImageSelected(event: Event){

    const  inputFile = (event?.target as HTMLInputElement)?.files?.[0];

    this.form.patchValue({image: inputFile});
    this.form.get('image')?.updateValueAndValidity();
    console.log(this.form)
     const reader = new FileReader();

     reader.onload = ()=>{
      this.imgPrev = reader.result as string;

     }
     reader.readAsDataURL(inputFile as File)
    }

    // onAdd(postForm: NgForm){
    onAdd(){

      // event.stopImmediatePropagation();

      console.log("On submit called",this.form)
      if (!this.form.invalid){
        console.log(this.form.value.image)
        const newPost = {
          title: this.form.value.title, //this.enteredTitle,
          content: this.form.value.content,//this.enteredContent
          image: this.form.value.image
      }
      console.log("Button clicked!!", newPost);
      // this.postCreated.emit({...newPost})

      if (this.mode == "edit"){
        return this.postService.updatePostById(this.postId as string,{...newPost,postId: this.postId as string})
      }
      this.postService.addPosts({...newPost})

      this.isLoading = true;


      this.form.reset()
    }

    }
}
