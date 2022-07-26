import { Injectable } from '@angular/core';
import { IUser } from '../../interface/admin.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {
public users:IUser[] = [
  {
    img: 'pineapple_PNG2750.png',
    age:29,
    email: 'KBDe@gmail.com',
     name:'ek',
      username:'alamu',
      phoneNo: 8109182995
  }
] 
  constructor() { }
}
