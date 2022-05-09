import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SupermarketRoutingModule } from './supermarket-routing.module';
import { SupermarketComponent } from './supermarket.component';
import { ButtonModule } from 'src/app/shared/button/button.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { EditSupermarketModule } from '../../shared/edit-supermarket/edit-supermarket.module';
import { SupermarketlistModule } from '../../shared/supermarketlist/supermarketlist.module';
import { AddGoodsModule } from '../../shared/add-goods/add-goods.module';



@NgModule({
  declarations: [
    SupermarketComponent
  ],
  imports: [
    CommonModule,
    SupermarketRoutingModule,
    ButtonModule,
    ReactiveFormsModule,
    MatDialogModule,
    EditSupermarketModule,
    SupermarketlistModule,
    AddGoodsModule
  ]
})
export class SupermarketModule { }
