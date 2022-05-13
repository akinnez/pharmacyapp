import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormRoutingModule } from './form-routing.module';
import { SigninComponent } from './signin/signin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'src/app/shared/button/button.module';
import { InputModule } from 'src/app/shared/input/input.module';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';
import {MatProgressBarModule} from '@angular/material/progress-bar'


@NgModule({
  declarations: [
    SigninComponent,
    ForgetpasswordComponent
  ],
  imports: [
    CommonModule,
    FormRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ButtonModule,
    InputModule,
    MatProgressBarModule
  ],
  exports:[SigninComponent]
})
export class FormModule { }
