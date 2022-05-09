import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditPharmacyComponent } from './edit-pharmacy.component';
import { PharmacyeditComponent } from '../../views/form/pharmacyedit/pharmacyedit.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    EditPharmacyComponent,
    PharmacyeditComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class EditPharmacyModule { }
