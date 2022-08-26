import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InventorySalesRoutingModule } from './inventory-sales-routing.module';
import { InventorySalesComponent } from './inventory-sales.component';
import { ButtonModule } from 'src/app/shared/button/button.module';
// import { InventoryStartComponent } from '../inventory-start/inventory-start.component';


@NgModule({
  declarations: [
    InventorySalesComponent,
    // InventoryStartComponent,
  ],
  imports: [
    CommonModule,
    InventorySalesRoutingModule,
    ButtonModule
  ],
  exports:[ InventorySalesComponent,
    // InventoryStartComponent,
  ]
})
export class InventorySalesModule { }
