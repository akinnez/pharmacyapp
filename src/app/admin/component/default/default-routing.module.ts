import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from '../../views/dashboard/dashboard.component';
import { DefaultComponent } from './default.component';

const routes: Routes = [
  {
    path:'',
    component:DefaultComponent,
    children:[
      {path:'',component:DashboardComponent},
      {path:"users", loadChildren:()=> import('../../views/user/user.module').then(m=>m.UserModule)},
      {path:"pharmacy", loadChildren:()=> import('../../views/pharmacy/pharmacy.module').then(m=>m.PharmacyModule)},
      {path:"supermarket", loadChildren:()=> import('../../views/supermarket/supermarket.module').then(m=>m.SupermarketModule)},
      {path:"pharmacy", loadChildren:()=> import('../../views/pharmacy/pharmacy.module').then(m=>m.PharmacyModule)},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DefaultRoutingModule { }
