import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WidgetsComponent } from './widgets.component';



@NgModule({
  declarations: [
    WidgetsComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[WidgetsComponent]
})
export class WidgetsModule { }
