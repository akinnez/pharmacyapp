import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultComponent } from './default.component';

const routes: Routes = [
  {
    path:'',
    component:DefaultComponent,
    children:[
      {path:'',loadChildren:()=> import('../../views/dashboard/dashboard.module').then(m=>m.DashboardModule)},
      {path:"users", loadChildren:()=> import('../../views/user/user.module').then(m=>m.UserModule)},
      {path:"pharmacy", loadChildren:()=> import('../../views/pharmacy/pharmacy.module').then(m=>m.PharmacyModule)},
      {path:"supermarket", loadChildren:()=> import('../../views/supermarket/supermarket.module').then(m=>m.SupermarketModule)},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DefaultRoutingModule { }
