import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddGoodsComponent } from './add-goods.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AddGoodsFormComponent } from '../../views/form/add-goods/add-goods.component';
import { MatTabsModule } from '@angular/material/tabs';
import { BulkModule } from '../../views/form/bulk/bulk.module';



@NgModule({
  declarations: [
    AddGoodsComponent,
    AddGoodsFormComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatTabsModule,
    BulkModule
  ]
})
export class AddGoodsModule { }
