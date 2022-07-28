import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatTabsModule} from '@angular/material/tabs';
import { UserDetailsPageComponent } from './user-details-page.component';
import { UseractivityModule } from '../useractivity/useractivity.module';
import { TransactionModule } from '../transaction/transaction.module';

@NgModule({
  declarations: [UserDetailsPageComponent],
  imports: [
    CommonModule,
    MatTabsModule,
    UseractivityModule,
    TransactionModule
  ],
  exports:[UserDetailsPageComponent]
})
export class UserDetailsPageModule { }
