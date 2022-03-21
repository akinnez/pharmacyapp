import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatSidenavModule} from '@angular/material/sidenav'
import { DefaultRoutingModule } from './default-routing.module';
import { DefaultComponent } from './default.component';
import { SidebarModule } from '../../views/sidebar/sidebar.module';
import { HeaderModule } from '../../views/header/header.module';
import { DashboardModule } from '../../views/dashboard/dashboard.module';

@NgModule({
  declarations: [
    DefaultComponent
  ],
  imports: [
    CommonModule,
    DefaultRoutingModule,
    MatSidenavModule,
    SidebarModule,
    HeaderModule
  ]
})
export class DefaultModule { }
