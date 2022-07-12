import { Directive, ElementRef } from '@angular/core';

import { cs3ButtonSecondarySelector } from './model';

@Directive({
  selector: `[${cs3ButtonSecondarySelector}]`,
})
export class ButtonDirective {
  constructor(private elementRef: ElementRef) {
    this.elementRef.nativeElement.className = cs3ButtonSecondarySelector;
  }
}
