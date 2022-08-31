import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuard } from '../guard/admin/admin.guard';

import { AdminComponent } from './admin.component';
// import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  {
    path:"",
    component:AdminComponent,
    children:[
      {
        path:"",
        loadChildren:()=> import('./views/form/form.module').then(m=>m.FormModule)
      },
      {
        path:'dashboard',
        loadChildren:()=> import('./component/default/default.module').then(m=>m.DefaultModule),
        canActivate:[AdminGuard]
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
