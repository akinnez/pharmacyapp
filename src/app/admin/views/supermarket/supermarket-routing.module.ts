import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SupermarketComponent } from './supermarket.component';

const routes: Routes = [
  {path:'',component:SupermarketComponent},
  {path:" ", redirectTo:" ",pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SupermarketRoutingModule { }
