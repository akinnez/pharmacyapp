import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { EditSupermarketComponent } from './edit-supermarket.component';
import { SupermarketeditModule } from '../../views/form/supermarketedit/supermarketedit.module';



@NgModule({
  declarations: [EditSupermarketComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SupermarketeditModule
  ]
})
export class EditSupermarketModule { }
