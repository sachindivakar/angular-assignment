import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UnderlineDirective } from './underline.directive';



@NgModule({
  declarations: [
    UnderlineDirective
  ],
  imports: [
    CommonModule
  ],
  exports:[
    UnderlineDirective
  ]
})
export class ModuleBModule { }
