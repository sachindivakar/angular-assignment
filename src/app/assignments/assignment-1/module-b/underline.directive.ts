import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[underline]'
})
export class UnderlineDirective {

  @Input('underline')
  enableUnderline = false

  @HostBinding('class.underline')
  get cssClasses(){
    return this.enableUnderline;
  }

  @HostListener("mouseover")
  mouoseOver(){
    this.enableUnderline = true;
  }
  @HostListener("mouseleave")
  mouseLeave(){
    this.enableUnderline = false;
  }
  constructor() { }

}
