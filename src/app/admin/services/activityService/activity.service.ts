import { Injectable } from '@angular/core';
import { IActivity, IUser } from '../../interface/admin.interface';

@Injectable({
  providedIn: 'root'
})
export class ActivityService {
  activityList: IActivity[] = [
    {
      username: 'khj',
    name: 'mirian maryam',
    activity: "logged In",
    duration: 10,
    lastSeen: 8 
    }
  ]

  constructor() {}
}
