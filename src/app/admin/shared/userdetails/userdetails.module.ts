import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserdetailsComponent } from './userdetails.component';
import { MatIconModule } from '@angular/material/icon';
import { DeleteNotificationModule } from '../delete-notification/delete-notification.module';
import { MatTabsModule } from '@angular/material/tabs';



@NgModule({
  declarations: [
    UserdetailsComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    DeleteNotificationModule,
    MatTabsModule
  ],
  exports:[UserdetailsComponent]
})
export class UserdetailsModule { }
