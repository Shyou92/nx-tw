import { Component, ElementRef, Input } from '@angular/core';

import { buttonSelector } from './model';

@Component({
  selector: `${buttonSelector}`,
  templateUrl: './impl.html',
  styleUrls: ['./impl.scss'],
})
export class ButtonComponent {
  @Input() buttonText: string;

  constructor(private elementRef: ElementRef) {
    // this.elementRef.nativeElement.className = buttonSelector;
    this.buttonText = '';
  }
}
