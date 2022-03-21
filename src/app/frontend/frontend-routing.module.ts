import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultComponent } from './views/default/default.component';
import { FrontendComponent } from './frontend.component';

const routes: Routes = [
  {
    path:"",
    component:FrontendComponent,
    children:[
      {
        path:'',component:DefaultComponent,
        children:[
          {
            path:'', loadChildren:()=>import('./views/home/home.module').then(m=>m.HomeModule)
          },
          {
            path:'store', loadChildren:()=>import ('./views/store/store.module').then(m=>m.StoreModule)
          },
          {
            path:'inventory',
            loadChildren:()=>import ('./views/inventory/inventory.module').then(n=>n.InventoryModule)
          }
        ]
      },
      {
        path:'home', redirectTo:"", pathMatch:'full'
      },
      {
        path:'form',loadChildren:()=>import ('./views/form/form.module').then(m=>m.FormModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FrontendRoutingModule { }
