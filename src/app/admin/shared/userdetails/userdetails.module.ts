import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserdetailsComponent } from './userdetails.component';
import { MatIconModule } from '@angular/material/icon';
import { DeleteNotificationModule } from '../delete-notification/delete-notification.module';



@NgModule({
  declarations: [
    UserdetailsComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    DeleteNotificationModule
  ],
  exports:[UserdetailsComponent]
})
export class UserdetailsModule { }
