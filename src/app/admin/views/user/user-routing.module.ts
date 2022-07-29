import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserDetailsPageComponent } from '../../shared/user-details-page/user-details-page.component';
import { UserComponent } from './user.component';

const routes: Routes = [
  {path:'',component:UserComponent},
  {path:"info/:name", component:UserDetailsPageComponent},
  //redirects
  {path:"", redirectTo:"",pathMatch:'full'},
  {path:"info/:name", redirectTo:"info/:name",pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
