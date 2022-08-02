import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddDrugsFormComponent } from '../../views/form/add-drugs-form/add-drugs-form.component';
import { AddDrugsComponent } from './add-drugs.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatTabsModule } from '@angular/material/tabs';
import { BulkModule } from '../../views/form/bulk/bulk.module';



@NgModule({
  declarations: [AddDrugsFormComponent,AddDrugsComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    BulkModule,
    MatTabsModule
  ]
})
export class AddDrugsModule { }
