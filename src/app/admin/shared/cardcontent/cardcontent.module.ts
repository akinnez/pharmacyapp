import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardcontentComponent } from './cardcontent.component';
import { CardModule } from '../card/card.module';
import { WidgetsModule } from '../widgets/widgets.module';



@NgModule({
  declarations: [
    CardcontentComponent
  ],
  imports: [
    CommonModule,
    CardModule,
    WidgetsModule
  ],
  exports:[CardcontentComponent]
})
export class CardcontentModule { }
