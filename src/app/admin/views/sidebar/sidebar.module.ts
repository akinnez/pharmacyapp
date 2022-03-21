import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar.component';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button'
import { ButtonModule } from 'src/app/shared/button/button.module';
import { DefaultRoutingModule } from '../../component/default/default-routing.module';




@NgModule({
  declarations: [
    SidebarComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatListModule,
    MatButtonModule,
    ButtonModule,
    DefaultRoutingModule
  ],
  exports:[
    SidebarComponent
  ]
})
export class SidebarModule { }
