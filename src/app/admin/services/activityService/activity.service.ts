import { Injectable } from '@angular/core';
import { IActivity, IUser } from '../../interface/admin.interface';
import { UserService } from '../userService/user.service';

@Injectable({
  providedIn: 'root'
})
export class ActivityService {
  activityList: IActivity[] = []
  user: IUser[] = []

  constructor(private userservice: UserService) {
    	this.user = this.userservice.users
   }
}
