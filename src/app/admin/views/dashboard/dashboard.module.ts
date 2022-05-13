import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { CardcontentModule } from '../../shared/cardcontent/cardcontent.module';
import { UseractivityModule } from '../../shared/useractivity/useractivity.module';
import { SummaryModule } from '../../shared/summary/summary.module';
import { CardModule } from '../../shared/card/card.module';


@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    CardcontentModule,
    UseractivityModule,
    SummaryModule,
    CardModule
  ]
})
export class DashboardModule { }
