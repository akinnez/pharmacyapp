import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { UserdetailsModule } from '../../shared/userdetails/userdetails.module';
import { ButtonModule } from 'src/app/shared/button/button.module';
import {ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    UserComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    UserdetailsModule,
    ButtonModule,
    ReactiveFormsModule
  ]
})
export class UserModule { }
