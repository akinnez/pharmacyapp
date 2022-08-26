import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InventoryStartComponent } from './inventory-start.component';

const routes: Routes = [
  {path: '', component:InventoryStartComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InventoryStartRoutingModule { }
