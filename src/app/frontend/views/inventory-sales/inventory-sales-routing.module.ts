import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InventorySalesComponent } from './inventory-sales.component';

const routes: Routes = [
  { 
    path: '', 
  component: InventorySalesComponent,
  children:[
    {
      path:'inventory',
      loadChildren:()=>import ('../inventory/inventory.module').then(n=>n.InventoryModule)
    },
    {
      path:'pending',
      loadChildren:()=>import ('../pending/pending.module').then(n=>n.PendingModule)
    },
  ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InventorySalesRoutingModule { }
