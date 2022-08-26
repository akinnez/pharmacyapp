import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TransactionsRoutingModule } from './transactions-routing.module';
import { TransactionsComponent } from './transactions.component';
import { TransactionModule } from 'src/app/admin/shared/transaction/transaction.module';


@NgModule({
  declarations: [
    TransactionsComponent
  ],
  imports: [
    CommonModule,
    TransactionsRoutingModule,
    TransactionModule
  ],
  exports: [TransactionsComponent]
})
export class TransactionsModule { }
