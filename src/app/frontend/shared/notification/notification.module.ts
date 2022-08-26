import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationComponent } from './notification.component';
import { ButtonModule } from 'src/app/shared/button/button.module';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [NotificationComponent],
  imports: [
    CommonModule,
    ButtonModule,
    MatIconModule
  ]
})
export class NotificationModule { }
