import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PharmacyRoutingModule } from './pharmacy-routing.module';
import { PharmacyComponent } from './pharmacy.component';
import { PharmacylistModule } from '../../shared/pharmacylist/pharmacylist.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'src/app/shared/button/button.module';
import { MatDialogModule } from '@angular/material/dialog';
import { EditPharmacyModule } from '../../shared/edit-pharmacy/edit-pharmacy.module';
import { AddDrugsModule } from '../../shared/add-drugs/add-drugs.module';


@NgModule({
  declarations: [
    PharmacyComponent,
  ],
  imports: [
    CommonModule,
    PharmacylistModule,
    PharmacyRoutingModule,
    ReactiveFormsModule,
    ButtonModule,
    MatDialogModule,
    AddDrugsModule,
    EditPharmacyModule
  ]
})
export class PharmacyModule { }
