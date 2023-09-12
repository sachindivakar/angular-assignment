import { ProductComponent6 } from './assignments/assignment-6/product/product.component';

import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {ComponentComponent as AssignmentOne} from "./assignments/assignment-1/module-a/component/component.component"
import {ComponentComponent as AssignmentTwo} from "./assignments/assignment-2/component/component.component"
import {ComponentComponent as AssignmentThree} from "./assignments/assignment-3/component/component.component"
import {ProductComponentComponent as AssignmentFour} from "./assignments/assignment-4/product-component/product-component.component"
import {ProductPageComponent as AssignmentFive} from "./assignments/assignment-5/product-page/product-page.component"

import {ProductPageComponent6 as AssignmentSix} from "./assignments/assignment-6/product-page/product-page.component"

import {AboutComponent as AssignmentSeventhAbout} from "./assignments/assignment-7/about/about.component"
import {ProductComponent as AssignmentSeventh} from "./assignments/assignment-7/product/product.component"
import { AssignmentsComponent } from './assignments/assignments.component';

import { ProductComponent as ProductsPage } from './assignments/assignment-7/product/product.component';
import { ProductDetailsComponent as ProductsDetailPage } from './assignments/assignment-7/product-details/product-details.component';
import { HeaderComponent as AssignmentSevenHome } from './assignments/assignment-7/header/header.component';
const routes: Routes = [{
  path:"", redirectTo: 'assignments', pathMatch: 'full'},
   // {path:"edit/:id",component: PostCreateComponent, canActivate:[AuthGuard]},
  // {path:"create",component: PostCreateComponent, canActivate:[AuthGuard]},
  // {path:"login",component: LoginComponent},
  // {path:"signup",component: SignupComponent},

  //could have used switch to generate content dynamically but used it
  {path:"assignments/1",component:AssignmentOne},
  {path:"assignments/2",component:AssignmentTwo},
  {path:"assignments/3",component:AssignmentThree},
  {path:"assignments/4",component:AssignmentFour},
  {path:"assignments/5",component:AssignmentFive},
  {path:"assignments/6",component:AssignmentSix},
  {path:"assignments/7", component:AssignmentSevenHome,   children: [
    { path: 'about', component: AssignmentSeventhAbout },
    // {
    //   path: '',
    //   component:AssignmentSeventhAbout
    // },
    { path: 'products', component: ProductsPage },
    { path: 'products/:id', component: ProductsDetailPage },
  ],},
  {path:"assignments",component: AssignmentsComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
