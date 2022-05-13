import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormRoutingModule } from './form-routing.module';
import { SigninComponent } from './signin/signin.component';
import { ButtonModule } from 'src/app/shared/button/button.module';
import { InputModule } from 'src/app/shared/input/input.module';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { MatProgressBarModule } from '@angular/material/progress-bar';
// import { AddGoodsComponent } from './add-goods/add-goods.component';
// import { AddDrugsFormComponent } from './add-drugs-form/add-drugs-form.component';


@NgModule({
  declarations: [
    SigninComponent,
    // AddGoodsComponent,
    // AddDrugsFormComponent
  ],
  imports: [
    CommonModule,
    FormRoutingModule,
    ButtonModule,
    InputModule,
    FormsModule,
    MatProgressBarModule,
    ReactiveFormsModule
  ]
})
export class FormModule { }
