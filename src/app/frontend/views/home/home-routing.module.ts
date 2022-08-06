import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotfoundComponent } from 'src/app/notfound/notfound.component';
import { HomeComponent } from './home.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent,
    children:[
      {
        path:"", loadChildren:()=>import ('../homepage/homepage.module').then(e=>e.HomepageModule)
      },
      {
        path:'store', loadChildren:()=>import ('../store/store.module').then(e=>e.StoreModule)
      },
      {
        path:'inventory',
        loadChildren:()=>import ('../inventory/inventory.module').then(n=>n.InventoryModule)
      },
      {
        path:'notfound',
       component:NotfoundComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
