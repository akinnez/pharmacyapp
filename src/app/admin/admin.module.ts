import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { DeleteNotificationComponent } from './shared/delete-notification/delete-notification.component';




@NgModule({
  declarations: [AdminComponent, DeleteNotificationComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    
  ]
})
export class AdminModule { }
