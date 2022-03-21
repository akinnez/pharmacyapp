import { Injectable } from '@angular/core';
import { IActivity, IUser } from '../../interface/admin.interface';

@Injectable({
  providedIn: 'root'
})
export class ActivityService {
  activityList: IActivity[] = []
  user: IUser[] = [
    {
      name:'bola',
      email:'bolaji@gmail.com',
      age: 56,
      username:'bolajisaka'
    }
  ]

  constructor() { }
}
