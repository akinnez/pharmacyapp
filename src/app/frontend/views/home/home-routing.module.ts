import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/guard/auth/auth.guard';
import { HomeComponent } from './home.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent,
    canActivate:[AuthGuard],
    children:[
      {
        path:"", loadChildren:()=>import ('../homepage/homepage.module').then(e=>e.HomepageModule),
        
      },
      {
        path:'store', loadChildren:()=>import ('../store/store.module').then(e=>e.StoreModule)
      },
      { path: 'inventory-sales', loadChildren: () => import('../inventory-sales/inventory-sales.module').then(m => m.InventorySalesModule) },
    ]
  },
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
