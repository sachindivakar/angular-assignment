import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import {MatInputModule} from '@angular/material/input'
import {MatCardModule} from '@angular/material/card'
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar'
import {MatExpansionModule} from '@angular/material/expansion'
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatPaginatorModule} from '@angular/material/paginator';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { ModuleAModule } from './assignments/assignment-1/module-a/module-a.module';
import { ComponentComponent as AssignmentTwo} from './assignments/assignment-2/component/component.component';
import { ComponentComponent as AssignmentThree } from './assignments/assignment-3/component/component.component';
import { ProductComponentComponent as ProductComponentAssignment4} from './assignments/assignment-4/product-component/product-component.component';
import { ProductComponentComponent as ProductComponentAssignment5} from './assignments/assignment-5/product-component/product-component.component';
import { ProductPageComponent } from './assignments/assignment-5/product-page/product-page.component';
import { AssignmentsComponent } from './assignments/assignments.component';
import { ProductPageComponent6 as ProductPageAssignmentSix } from './assignments/assignment-6/product-page/product-page.component';
import { ProductComponent6 as ProductComponentAssignmentSix } from './assignments/assignment-6/product/product.component';
import { ProductComponent } from './assignments/assignment-7/product/product.component';
import { ProductDetailsComponent } from './assignments/assignment-7/product-details/product-details.component';
import { AboutComponent } from './assignments/assignment-7/about/about.component';
import { HeaderComponent } from './assignments/assignment-7/header/header.component';
@NgModule({
  declarations: [
    AppComponent,
    AssignmentTwo,
    AssignmentThree,
    ProductComponentAssignment4,
    ProductComponentAssignment5,
    ProductPageComponent,
    AssignmentsComponent,
    ProductPageAssignmentSix,
    ProductComponentAssignmentSix,
    ProductComponent,
    ProductDetailsComponent,
    AboutComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule ,
    BrowserAnimationsModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatExpansionModule,
    HttpClientModule,
    MatProgressSpinnerModule,
    MatPaginatorModule,
    ModuleAModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
