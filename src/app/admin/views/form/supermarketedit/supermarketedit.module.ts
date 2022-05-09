import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SupermarketeditComponent } from './supermarketedit.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    SupermarketeditComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports:[SupermarketeditComponent]
})
export class SupermarketeditModule { }
