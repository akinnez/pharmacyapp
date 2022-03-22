import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PharmacylistComponent } from './pharmacylist.component';



@NgModule({
  declarations: [
    PharmacylistComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[PharmacylistComponent]
})
export class PharmacylistModule { }
