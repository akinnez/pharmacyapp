import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InventoryStartRoutingModule } from './inventory-start-routing.module';
import { ButtonModule } from 'src/app/shared/button/button.module';
import { InventoryStartComponent } from './inventory-start.component';


@NgModule({
  declarations: [InventoryStartComponent],
  imports: [
    CommonModule,
    InventoryStartRoutingModule,
    ButtonModule
  ]
})
export class InventoryStartModule { }
