import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormRoutingModule } from './form-routing.module';
import { SigninComponent } from './signin/signin.component';
import { ButtonModule } from 'src/app/shared/button/button.module';
import { InputModule } from 'src/app/shared/input/input.module';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [
    SigninComponent
  ],
  imports: [
    CommonModule,
    FormRoutingModule,
    ButtonModule,
    InputModule,
    FormsModule,
    MatProgressBarModule,
    MatIconModule,
    ReactiveFormsModule
  ]
})
export class FormModule { }
