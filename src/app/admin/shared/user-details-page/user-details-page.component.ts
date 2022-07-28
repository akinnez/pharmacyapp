import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../services/userService/user.service';

@Component({
  selector: 'app-user-details-page',
  templateUrl: './user-details-page.component.html',
  styleUrls: ['./user-details-page.component.scss']
})
export class UserDetailsPageComponent implements OnInit {
getParams:any;
params:any;
age: number;
email: string;
name: string;
username: string;
phoneNo: number;
userInfo: any;
img:string
prim: string= '#502F4C';
secon: string= '#902F4C';


  constructor(public user:UserService, public route:ActivatedRoute) {
   this.route.params.subscribe(params =>{
      this.params = params['name']
    })
   this.userInfo =  this.user.users.find((e)=>{
      return e.name === this.params
    })
    this.age = this.userInfo.age
    this.email = this.userInfo.email
    this.name = this.userInfo.name
    this.username = this.userInfo.username
    this.phoneNo = this.userInfo.phoneNo
    this.img = this.userInfo.img
   }

  ngOnInit(){
    console.log(this.params);
  }

}
