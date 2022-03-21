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
  show = false

  constructor(public fb:FormBuilder, public users:ActivityService) { }

  formdata = this.fb.group({
    search:['']
  }) 

  ngOnInit(): void {
    this.user = this.users.user
    if (this.user !=[]) {this.show = true} else {this.show = false}
  }

  navigate(){
   
  }
}
