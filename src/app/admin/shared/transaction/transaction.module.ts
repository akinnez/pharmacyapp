import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { TransactionComponent } from './transaction.component';
import { ReactiveFormsModule } from '@angular/forms';
import {MatPaginatorModule} from '@angular/material/paginator';


@NgModule({
  declarations: [
    TransactionComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatPaginatorModule
  ],
  providers:[DatePipe]
  ,
  exports:[TransactionComponent]
})
export class TransactionModule { }
