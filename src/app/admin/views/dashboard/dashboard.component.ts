import { Component, OnInit } from '@angular/core';

interface IList{
  title:string,
  value:number | any
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
dashList:IList[] = [
  {title:'Total Users', value: 0},
  {title:'Online Users', value:1234567},
  {title:'Total Sales', value: 123456783456},
]
  constructor() { }

  ngOnInit(): void {
    for (let index = 0; index < this.dashList.length; index++) {
      const element = this.dashList[index];
      
      if (element.value > 9999999) {
        element.value = (element.value / 1000000000).toFixed(2) + 'B';
      }
      if (element.value > 99999) {
        element.value = (element.value / 1000000).toFixed(2) + 'M';
      }
      if (element.value > 999) {
        element.value = (element.value / 1000).toFixed(2) + 'K';
      }
    }
  }

}
