import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingPageRoutingModule } from './landing-page-routing.module';
import { LandingPageComponent } from './landing-page.component';
import { NavbarModule } from '../../shared/navbar/navbar.module';
import { FooterModule } from '../../shared/footer/footer.module';
import { ButtonModule } from 'src/app/shared/button/button.module';


@NgModule({
  declarations: [LandingPageComponent],
  imports: [
    CommonModule,
    LandingPageRoutingModule,
    NavbarModule,
    FooterModule,
    ButtonModule
  ],
  exports:[LandingPageComponent]
})
export class LandingPageModule { }
