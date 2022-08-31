import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/userService/user.service';

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
  {title:'Online Users', value:0},
  {title:'Total Sales', value: 0},
]
  constructor(public us:UserService) { }

  ngOnInit(): void {
    this.us.getData().subscribe(
      res=>{
        this.dashList[0].value = res.length
      }
    )
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
