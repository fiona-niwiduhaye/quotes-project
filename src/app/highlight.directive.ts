
import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {


  constructor(private elem: ElementRef) {
    console.log(elem)
    this.elem.nativeElement.style.boxShadow='1px 80px 20px 10px green';
  }


}
