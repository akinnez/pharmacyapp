import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';
import { SigninComponent } from './signin/signin.component';

const routes: Routes = [{
  path:'login',
  component:SigninComponent
},
{
  path:'forget-password',
  component:ForgetpasswordComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormRoutingModule { }
