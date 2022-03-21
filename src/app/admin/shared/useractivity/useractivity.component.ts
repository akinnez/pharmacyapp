import { Component, OnInit } from '@angular/core';
import { IActivity } from '../../interface/admin.interface';
import { ActivityService } from '../../services/activityService/activity.service';

@Component({
  selector: 'user-activity',
  templateUrl: './useractivity.component.html',
  styleUrls: ['./useractivity.component.scss']
})
export class UseractivityComponent implements OnInit {
  cond:boolean = false
  condition:boolean = true
  
  
  constructor(public activity:ActivityService) { }
  
  activityList:IActivity[] = this.activity.activityList

  ngOnInit(): void {
    this.checkActivities()
    }

  checkActivities(){
      if(this.activityList.length == 0){
        this.cond = true; 
        this.condition = false
    }
  }
}
