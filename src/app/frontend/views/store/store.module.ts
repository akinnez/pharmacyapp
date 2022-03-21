import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreRoutingModule } from './store-routing.module';
import { PharmacyComponent } from './pharmacy/pharmacy.component';
import { SupermarketComponent } from './supermarket/supermarket.component';


@NgModule({
  declarations: [
    PharmacyComponent,
    SupermarketComponent
  ],
  imports: [
    CommonModule,
    StoreRoutingModule
  ]
})
export class StoreModule { }
