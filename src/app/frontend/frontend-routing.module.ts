import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FrontendComponent } from './frontend.component';

const routes: Routes = [
  {
    path:"", component:FrontendComponent,
    children:[
      {
        path: "", loadChildren:()=>import('./views/landing-page/landing-page.module').then(m=>m.LandingPageModule)
      },
          {
            path:"user/:name", loadChildren:()=>import('./views/home/home.module').then(m=>m.HomeModule)
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
