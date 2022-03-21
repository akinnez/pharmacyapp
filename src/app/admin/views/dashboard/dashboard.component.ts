import { Component, OnInit } from '@angular/core';

interface IList{
  title:string,
  value:number
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
dashList:IList[] = [
  {title:'Total Users', value: 0},
  {title:'Total Online Users', value: 0},
  {title:'Total Sales', value: 0},
]
  constructor() { }

  ngOnInit(): void {
  }

}
