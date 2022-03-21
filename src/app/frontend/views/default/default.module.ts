import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import { FooterModule } from '../../shared/footer/footer.module';
import { FrontendRoutingModule } from '../../frontend-routing.module';
import { NavbarModule } from '../../shared/navbar/navbar.module';



@NgModule({
  declarations: [DefaultComponent],
  imports: [
    FrontendRoutingModule,
    CommonModule,
    FooterModule,
    NavbarModule
  ],
  exports:[DefaultComponent]
})
export class DefaultModule { }
