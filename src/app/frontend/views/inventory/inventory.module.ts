import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InventoryRoutingModule } from './inventory-routing.module';
import { InventoryComponent } from './inventory.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'src/app/shared/button/button.module';
import { MatDialogModule } from '@angular/material/dialog';
import { NotificationModule } from '../../shared/notification/notification.module';


@NgModule({
  declarations: [
    InventoryComponent
  ],
  imports: [
    CommonModule,
    InventoryRoutingModule,
    ReactiveFormsModule,
    ButtonModule,
    MatDialogModule,
    NotificationModule
   
  ]
})
export class InventoryModule { }
