import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button.component';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [ButtonComponent],
  imports: [
    CommonModule,
    MatIconModule
  ],
  exports:[ButtonComponent]
})
export class ButtonModule { }
