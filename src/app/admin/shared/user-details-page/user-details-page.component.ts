import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../services/userService/user.service';

@Component({
  selector: 'app-user-details-page',
  templateUrl: './user-details-page.component.html',
  styleUrls: ['./user-details-page.component.scss']
})
export class UserDetailsPageComponent implements OnInit,OnDestroy {
getParams:any;
params:any;
destroy:any;
age: number = 0;
email: string = '';
name: string = '';
username: string = '';
phoneNo: number = 0;
userInfo: any;
img:string = ''



  constructor(public user:UserService, public route:ActivatedRoute) {
    try {
      this.destroy = this.route.params.subscribe(params =>{
        this.params = params['name']

        this.destroy = this.user.getData().subscribe(
          res =>{
            this.userInfo =  res.find((e:any)=>{
              return e.fullname === this.params
            })
            console.log(this.userInfo);
            this.age = this.userInfo.age
            this.email = this.userInfo.email
            this.name = this.userInfo.fullname
            this.username = this.userInfo.username
            this.phoneNo = this.userInfo.phoneNumber
            this.img = this.userInfo.image
           
          })
      })
      
    } catch (error) {
      console.log(error)
     }
    }

  ngOnInit(){}
  ngOnDestroy(): void {
    this.destroy.unsubscribe()
  }

}
