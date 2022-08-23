import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PendingRoutingModule } from './pending-routing.module';
import { PendingComponent } from './pending.component';
import { ButtonModule } from 'src/app/shared/button/button.module';


@NgModule({
  declarations: [
    PendingComponent
  ],
  imports: [
    CommonModule,
    PendingRoutingModule,
    ButtonModule
  ]
})
export class PendingModule { }
