import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { DeleteNotificationComponent } from './shared/delete-notification/delete-notification.component';
import { UserDetailsPageComponent } from './shared/user-details-page/user-details-page.component';



@NgModule({
  declarations: [AdminComponent, DeleteNotificationComponent, UserDetailsPageComponent],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
