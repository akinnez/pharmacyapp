import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormRoutingModule } from './form-routing.module';
import { SigninComponent } from './signin/signin.component';
import { CreateComponent } from './create/create.component';
import { ButtonModule } from 'src/app/shared/button/button.module';
import { InputModule } from 'src/app/shared/input/input.module';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    SigninComponent,
    CreateComponent
  ],
  imports: [
    CommonModule,
    FormRoutingModule,
    ButtonModule,
    InputModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class FormModule { }
