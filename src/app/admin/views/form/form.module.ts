import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormRoutingModule } from './form-routing.module';
import { SigninComponent } from './signin/signin.component';
import { CreateComponent } from './create/create.component';
import { ButtonModule } from 'src/app/shared/button/button.module';
import { InputModule } from 'src/app/shared/input/input.module';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
// import { AddGoodsComponent } from './add-goods/add-goods.component';
// import { AddDrugsFormComponent } from './add-drugs-form/add-drugs-form.component';


@NgModule({
  declarations: [
    SigninComponent,
    CreateComponent,
    // AddGoodsComponent,
    // AddDrugsFormComponent
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
