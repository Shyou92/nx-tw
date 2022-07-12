import { NgModule } from '@angular/core';

import { ButtonDirective } from '../../directives/button/impl';
import { ButtonComponent } from './impl';

@NgModule({
  declarations: [ButtonComponent, ButtonDirective],
  exports: [ButtonComponent],
  bootstrap: [ButtonComponent],
})
export class ButtonModule {}
