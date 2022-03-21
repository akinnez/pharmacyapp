import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar.component';
import { ButtonModule } from 'src/app/shared/button/button.module';



@NgModule({
  declarations: [NavbarComponent],
  imports: [
    CommonModule,
    ButtonModule
  ],
  exports:[NavbarComponent]
})
export class NavbarModule { }
