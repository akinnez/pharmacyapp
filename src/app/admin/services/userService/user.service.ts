import { Injectable } from '@angular/core';
import { IUser } from '../../interface/admin.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {
public users:IUser[] = [
  {
    age:29,
    email: 'oye@gmail.com',
     name:'ek',
      username:'alamu'
  }
] 
  constructor() { }
}
