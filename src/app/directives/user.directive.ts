import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appUser]'
})
export class UserDirective {

  constructor(private elem:ElementRef) {
    this.elem.nativeElement.style.backgroundColor = "rgb(249, 249, 255)"
   }

}