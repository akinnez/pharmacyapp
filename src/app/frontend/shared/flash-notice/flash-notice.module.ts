import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlashNoticeComponent } from './flash-notice.component';
import { ButtonModule } from 'src/app/shared/button/button.module';

@NgModule({
  declarations: [FlashNoticeComponent],
  imports: [
    CommonModule,
    ButtonModule
  ]
})
export class FlashNoticeModule { }
