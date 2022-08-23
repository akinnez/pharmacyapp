import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar.component';
import { ButtonModule } from 'src/app/shared/button/button.module';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [NavbarComponent],
  imports: [
    CommonModule,
    ButtonModule,
    MatIconModule
  ],
  exports:[NavbarComponent]
})
export class NavbarModule { }
