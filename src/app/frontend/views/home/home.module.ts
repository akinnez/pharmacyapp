import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { NavbarModule } from '../../shared/navbar/navbar.module';
import { FooterModule } from '../../shared/footer/footer.module';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    NavbarModule,
    FooterModule
  ]
})
export class HomeModule { }
