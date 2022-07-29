import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserDetailsPageComponent } from '../../shared/user-details-page/user-details-page.component';
import { UserComponent } from './user.component';

const routes: Routes = [
  {path:'',component:UserComponent},
  {path:"info/:name", component:UserDetailsPageComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
