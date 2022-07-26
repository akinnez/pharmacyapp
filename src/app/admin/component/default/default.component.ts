import { AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss'],
  
})
export class DefaultComponent implements OnInit {
  observer:any;
  sideBarOpen:boolean = true
  // val:number = 0
  value:number = 0
  constructor() {}

  ngOnInit():void {
    this.observer = document.querySelector('body');
     new ResizeObserver((entries)=>{
     (entries[0].contentRect.width < 991 ? this.doclose() : this.doOpen());
    //  (entries[0].contentRect.width >= 1440 ? this.value = (entries[0].contentRect.width/ 1440) * 7: "" )
     }).observe(this.observer)
  }
  toggleSideBar(){
    this.sideBarOpen = !this.sideBarOpen
  }
  doOpen(){
    this.sideBarOpen = true
    this.value = 5
  }
  doclose(){
    this.sideBarOpen = false
    this.value = 100
  }
 
}
