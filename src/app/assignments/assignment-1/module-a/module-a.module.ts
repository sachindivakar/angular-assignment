
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightDirective } from './highlight.directive';
import { ComponentComponent } from './component/component.component';
import { ModuleBModule } from './../module-b/module-b.module';



@NgModule({
  declarations: [
    HighlightDirective,
    ComponentComponent,
  ],
  imports: [
    CommonModule,
    ModuleBModule
  ],
  exports:[ComponentComponent]
})
export class ModuleAModule { }
