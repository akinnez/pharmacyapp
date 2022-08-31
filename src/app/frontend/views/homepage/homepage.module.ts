import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomepageRoutingModule } from './homepage-routing.module';
import { HomepageComponent } from './homepage.component';
import { LandingPageModule } from '../landing-page/landing-page.module';
import { MatDialogModule } from '@angular/material/dialog';
import { FlashNoticeModule } from '../../shared/flash-notice/flash-notice.module';


@NgModule({
  declarations: [
    HomepageComponent
  ],
  imports: [
    CommonModule,
    HomepageRoutingModule,
    LandingPageModule,
    MatDialogModule,
    FlashNoticeModule
  ]
})
export class HomepageModule { }
