import { Component, OnInit,EventEmitter,Output } from '@angular/core';

@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  @Output() toggleSideBarForMe:EventEmitter<any> = new EventEmitter;
  
  appy:string = '';
  observer:any;
  val:number = 0;
  lengthy: number = 0

  sidelist = [
    {icon:'home',text:'Dashboard',link:'dashboard'},
    {icon:'account_circle',text:'Users',link:'dashboard/users'},
    {icon:'local_hospital',text:'Pharmacy',link:'dashboard/pharmacy'},
    {icon:'shopping_cart',text:'Supermarket',link:'dashboard/supermarket'},
    {icon:'help',text:'Help',link:'dashboard/help'},
  ]
  
  constructor() {}

  ngOnInit() {
   this.observer = document.querySelector('body')
   new ResizeObserver((e)=>{
    this.lengthy = e[0].contentRect.width;
      (e[0].contentRect.width >= 991 ? this.doValue(): this.dontValue());
   }).observe(this.observer)
   
    setTimeout(()=>{
      window.dispatchEvent(
        new Event('resize')
      )
    },300)
      }

  sideBarToggle(){
    this.toggleSideBarForMe.emit();
  }
  doValue(){
    this.appy = 'd-none'
    this.val= 0
  }
  dontValue(){
    this.appy = 'd-inline';
    this.val = (this.lengthy / 990) * 10
    
  }
 
}
