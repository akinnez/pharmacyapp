import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreRoutingModule } from './store-routing.module';
import { PharmacyComponent } from './pharmacy/pharmacy.component';
import { SupermarketComponent } from './supermarket/supermarket.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'src/app/shared/button/button.module';
import { InputModule } from 'src/app/shared/input/input.module';


@NgModule({
  declarations: [
    PharmacyComponent,
    SupermarketComponent
  ],
  imports: [
    CommonModule,
    StoreRoutingModule,
    ReactiveFormsModule,
    ButtonModule,
    InputModule
  ]
})
export class StoreModule { }
