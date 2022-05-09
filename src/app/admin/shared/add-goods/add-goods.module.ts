import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddGoodsComponent } from './add-goods.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AddGoodsFormComponent } from '../../views/form/add-goods/add-goods.component';



@NgModule({
  declarations: [
    AddGoodsComponent,
    AddGoodsFormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    
  ]
})
export class AddGoodsModule { }
