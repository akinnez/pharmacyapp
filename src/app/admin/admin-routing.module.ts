import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminComponent } from './admin.component';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  {
    path:"",
    component:AdminComponent,
    children:[
      // {
      //   path:"",
      //   component:LayoutComponent,
      // },
      {
        path:'',
        loadChildren:()=> import('./component/default/default.module').then(m=>m.DefaultModule)
      },
      {
        path:"form",
        loadChildren:()=> import('./views/form/form.module').then(m=>m.FormModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
