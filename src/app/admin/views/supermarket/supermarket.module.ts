import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SupermarketRoutingModule } from './supermarket-routing.module';
import { SupermarketComponent } from './supermarket.component';


@NgModule({
  declarations: [
    SupermarketComponent
  ],
  imports: [
    CommonModule,
    SupermarketRoutingModule
  ]
})
export class SupermarketModule { }
