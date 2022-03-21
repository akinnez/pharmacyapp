import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UseractivityComponent } from './useractivity.component';



@NgModule({
  declarations: [
    UseractivityComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[UseractivityComponent]
})
export class UseractivityModule { }
