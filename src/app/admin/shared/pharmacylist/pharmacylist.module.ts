import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PharmacylistComponent } from './pharmacylist.component';
import {MatDialogModule} from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';



@NgModule({
  declarations: [
    PharmacylistComponent
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    MatIconModule,
    MatPaginatorModule
  ],
  exports:[PharmacylistComponent],
  
  
})
export class PharmacylistModule { }
