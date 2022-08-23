import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InventorySalesRoutingModule } from './inventory-sales-routing.module';
import { InventorySalesComponent } from './inventory-sales.component';


@NgModule({
  declarations: [
    InventorySalesComponent
  ],
  imports: [
    CommonModule,
    InventorySalesRoutingModule
  ]
})
export class InventorySalesModule { }
