import { Component, OnInit,EventEmitter,Output } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  @Output() toggleSideBarForMe:EventEmitter<any> = new EventEmitter

  sidelist:any[] = [
    {icon:'home',text:'Dashboard',link:''},
    {icon:'account_circle',text:'Users',link:'users'},
    {icon:'',text:'Pharmacy',link:'pharmacy'},
    {icon:'',text:'Supermarket',link:'supermarket'},
    {icon:'',text:'Help',link:'help'},
  ]
  constructor() {}

  ngOnInit(): void {}

  sideBarToggle(){
    this.toggleSideBarForMe.emit();
  }
}
