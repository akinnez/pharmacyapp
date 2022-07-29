import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotfoundComponent } from './notfound/notfound.component';

const routes: Routes = [
  {
    path:'',
    loadChildren: ()=>import('./frontend/frontend.module').then(m=>m.FrontendModule)
  },
  {path:"home", redirectTo:"/",pathMatch:'full'},
  {
    path:'admin',
    loadChildren: ()=>import('./admin/admin.module').then(m=>m.AdminModule)
  },
  {path:"admin", redirectTo:"admin",pathMatch:'full'},
  {
      path:"**",
      component:NotfoundComponent
    },
    {path:"**", redirectTo:"**",pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
