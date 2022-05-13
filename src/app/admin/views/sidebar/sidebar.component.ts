import { Component, OnInit,EventEmitter,Output } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  @Output() toggleSideBarForMe:EventEmitter<any> = new EventEmitter

  sidelist:any[] = [
    {icon:'home',text:'Dashboard',link:'dashboard'},
    {icon:'account_circle',text:'Users',link:'dashboard/users'},
    {icon:'local_hospital',text:'Pharmacy',link:'dashboard/pharmacy'},
    {icon:'shopping_cart',text:'Supermarket',link:'dashboard/supermarket'},
    {icon:'help',text:'Help',link:'dashboard/help'},
  ]
  
  constructor() {}

  ngOnInit(): void {}

  sideBarToggle(){
    this.toggleSideBarForMe.emit();
  }
}
