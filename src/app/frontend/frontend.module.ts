import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FrontendRoutingModule } from './frontend-routing.module';
import { FrontendComponent } from './frontend.component';
import { DefaultModule } from './views/default/default.module';
@NgModule({
  declarations: [
    FrontendComponent,
  ],
  imports: [
    CommonModule,
    DefaultModule,
    FrontendRoutingModule,
  ]
})
export class FrontendModule { }
