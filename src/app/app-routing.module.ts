import { Assignment2Module } from './assignments/assignment-2/assignment-2.module';
import { LoginComponent } from './auth/login/login.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostListComponent } from './posts/post-list/post-list.component';
import { PostCreateComponent } from './posts/post-create/post-create.component';
import {  SignupComponent } from './auth/signup/signup.component';
import { AuthGuard } from './auth.guard';
import {ComponentComponent as AssignmentOne} from "./assignments/assignment-1/module-a/component/component.component"
import {ComponentComponent as AssignmentTwo} from "./assignments/assignment-2/component/component.component"
import {ComponentComponent as AssignmentThree} from "./assignments/assignment-3/component/component.component"
import {ProductComponentComponent as AssignmentFour} from "./assignments/assignment-4/product-component/product-component.component"
const routes: Routes = [{
  path:"",component: PostListComponent},
  {path:"edit/:id",component: PostCreateComponent, canActivate:[AuthGuard]},
  {path:"create",component: PostCreateComponent, canActivate:[AuthGuard]},
  {path:"login",component: LoginComponent},
  {path:"signup",component: SignupComponent},
  {path:"assignments/1",component:AssignmentOne},
  {path:"assignments/2",component:AssignmentTwo},
  {path:"assignments/3",component:AssignmentThree},
  {path:"assignments/4",component:AssignmentFour},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
