import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BulkComponent } from './bulk.component';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [BulkComponent],
  imports: [
    CommonModule,
    MatIconModule,
    ReactiveFormsModule
  ],
  exports:[BulkComponent]
})
export class BulkModule { }
