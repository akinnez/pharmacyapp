import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddUserComponent } from './add-user.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CreateComponent } from '../../views/form/create/create.component';
import { InputModule } from 'src/app/shared/input/input.module';
import { ButtonModule } from 'src/app/shared/button/button.module';



@NgModule({
  declarations: [
    AddUserComponent,
    CreateComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    InputModule,
    ButtonModule
  ],
  exports:[
    AddUserComponent
  ]
})
export class AddUserModule { }
