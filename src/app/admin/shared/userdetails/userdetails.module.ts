import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserdetailsComponent } from './userdetails.component';
import { ButtonModule } from 'src/app/shared/button/button.module';



@NgModule({
  declarations: [
    UserdetailsComponent
  ],
  imports: [
    CommonModule,
    ButtonModule
  ],
  exports:[UserdetailsComponent]
})
export class UserdetailsModule { }
