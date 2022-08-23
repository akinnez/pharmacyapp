import { Injectable, OnInit } from '@angular/core';
import { ApiService } from 'src/app/shared/api.service';
import { IUser } from '../../interface/admin.interface';
import {environment} from '../../../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class UserService {
  route:string = 'users';
  transactionID:boolean = false;
  id:number | any

public users:IUser[] = [
  // {
  //   img: 'pineapple_PNG2750.png',
  //   age:29,
  //   email: 'KBDe@gmail.com',
  //   name:'ek',
  //   username:'alamu',
  //   phoneNo: 8109182995},
  // {
  //   img: 'R.jfif',
  //   age:42,
  //   email: 'hggnheja@gmail.com',
  //   name:'ekunbayo olonginidide',
  //   username:'babaaje',
  //   phoneNo: 8135468290,
    // logs:[{
    //   activity:'',
    //   logInTime: 12,
    //   logOutTime: 12,
    // }],
    // transaction:[
    //   {
    //   transactionId: 35732,
    //   transactionDate: 12222,
    //   product:[
    //     {
    //       name: 'green',
    //       category: 'pharmacy',
    //       price:3000,
    //       qtty: 10
    //     },
    //     {
    //       name: 'red',
    //       category: 'supermarket',
    //       price: 1000,
    //       qtty: 5,
    //     },
    //       {
    //         name: '',
    //         category: 'pharmacy',
    //         price:3000,
    //         qtty: 10
    //       }
    //     ]
    //   },
    //   {
    //     transactionId: 35732,
    //     transactionDate: 12222,
    //     product:[{
    //         name: 'reen',
    //         category: 'pharmacy',
    //         price:100,
    //         qtty: 10
    //       },
    //       {
    //         name: 'red',
    //         category: 'pharmacy',
    //         price: 300,
    //         qtty: 5,},
    //         {
    //           name: '',
    //           category: 'supermarket',
    //           price:2000,
    //           qtty: 40
    //         }
    //       ]
    //     }
    // ] 
  // }
]
constructor(private apiService: ApiService) {  }

 postData(data:object){
  return this.apiService.post(environment.url + this.route, data)
}

getData(){
  return this.apiService.get(environment.url + this.route)
}
getAdminData(){
  return this.apiService.get(environment.url + 'admins')
}
deleteUser(i:number){
  return this.apiService.delete(environment.url + this.route + `/${i}`,)
}

}