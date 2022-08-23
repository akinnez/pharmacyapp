import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InventoryRoutingModule } from './inventory-routing.module';
import { InventoryComponent } from './inventory.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'src/app/shared/button/button.module';
import { NavbarModule } from '../../shared/navbar/navbar.module';


@NgModule({
  declarations: [
    InventoryComponent
  ],
  imports: [
    CommonModule,
    InventoryRoutingModule,
    ReactiveFormsModule,
    ButtonModule
  ]
})
export class InventoryModule { }
