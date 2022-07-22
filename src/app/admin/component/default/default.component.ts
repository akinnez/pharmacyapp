import { AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss'],
  
})
export class DefaultComponent implements OnInit {
  observer:any;
  sideBarOpen:any
  constructor() {}

  ngOnInit():void {
    this.observer = document.querySelector('body');
     new ResizeObserver((entries)=>{
      console.log(entries[0].contentRect.width > 991);
      
     (entries[0].contentRect.width > 991 ? this.sideBarOpen = true : this.sideBarOpen = false )
     }).observe(this.observer)
  }
  toggleSideBar(){
    this.sideBarOpen = !this.sideBarOpen
  }
 
}
