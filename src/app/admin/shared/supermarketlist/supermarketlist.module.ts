import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SupermarketlistComponent } from './supermarketlist.component';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatPaginatorModule } from '@angular/material/paginator';



@NgModule({
  declarations: [
    SupermarketlistComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatDialogModule,
    MatPaginatorModule
  ],
  exports:[SupermarketlistComponent]
})
export class SupermarketlistModule { }
