import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PharmacyRoutingModule } from './pharmacy-routing.module';
import { PharmacyComponent } from './pharmacy.component';
import { PharmacylistModule } from '../../shared/pharmacylist/pharmacylist.module';


@NgModule({
  declarations: [
    PharmacyComponent
  ],
  imports: [
    CommonModule,
    PharmacylistModule,
    PharmacyRoutingModule
  ]
})
export class PharmacyModule { }
