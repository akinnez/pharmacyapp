import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SummaryComponent } from './summary.component';
import { CardModule } from '../card/card.module';



@NgModule({
  declarations: [
    SummaryComponent
  ],
  imports: [
    CommonModule,
    CardModule
  ],
  exports:[SummaryComponent]
})
export class SummaryModule { }
