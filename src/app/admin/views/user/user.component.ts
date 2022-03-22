import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivityService } from '../../services/activityService/activity.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})

export class UserComponent implements OnInit {
  user:any
  cond:boolean = false
  condition:boolean = true

  constructor(public fb:FormBuilder, public users:ActivityService) { }

  formdata = this.fb.group({
    search:['']
  }) 

  ngOnInit(): void {
    this.user = this.users.user
    this.checkActivities()
  }

  checkActivities(){
    if(this.user.length == 0){
      this.cond = true; 
      this.condition = false
  }
}
  navigate(){
   
  }
}
