import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { UserdetailsModule } from '../../shared/userdetails/userdetails.module';
import { ButtonModule } from 'src/app/shared/button/button.module';
import {ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { AddUserModule } from '../../shared/add-user/add-user.module';
import { UserDetailsPageModule } from '../../shared/user-details-page/user-details-page.module';


@NgModule({
  declarations: [
    UserComponent,
    
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    UserdetailsModule,
    UserDetailsPageModule,
    ButtonModule,
    ReactiveFormsModule,
    MatDialogModule,
    AddUserModule,
  ]
})
export class UserModule { }
