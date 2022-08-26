import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InventorySalesComponent } from './inventory-sales.component';

const routes: Routes = [
  { 
    path: '', 
  component: InventorySalesComponent,
  children:[
    {
      path: '', loadChildren:()=>import ('../inventory-start/inventory-start.module').then(n=>n.InventoryStartModule)
    },
    {
      path:'inventory',
      loadChildren:()=>import ('../inventory/inventory.module').then(n=>n.InventoryModule)
    },
    { path: 'transactions', loadChildren: () => import('../transactions/transactions.module').then(m => m.TransactionsModule) },
    {
      path:'pending',
      loadChildren:()=>import ('../pending/pending.module').then(n=>n.PendingModule)
    },
  ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InventorySalesRoutingModule { }
