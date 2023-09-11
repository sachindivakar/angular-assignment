import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[highlight]'
})
export class HighlightDirective {

  @Input('highlight')
  isHighlighted = false

  @HostBinding('class.isHighlighted')
  get cssClasses(){
    return this.isHighlighted;
  }


  @HostListener('mouseover')
  mouseOver(){
    this.isHighlighted = true
  }

  @HostListener('mouseleave')
  mouseleave(){
    this.isHighlighted = false
  }
  constructor() {


   }



}
