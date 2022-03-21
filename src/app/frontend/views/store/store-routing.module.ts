import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PharmacyComponent } from './pharmacy/pharmacy.component';
import { SupermarketComponent } from './supermarket/supermarket.component';

const routes: Routes = [
  {
    path:'pharmacy',
    component:PharmacyComponent
  },
  {
    path:'supermarket',
    component:SupermarketComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StoreRoutingModule { }
