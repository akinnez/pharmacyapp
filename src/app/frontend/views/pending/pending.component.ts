import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/admin/services/userService/user.service';

@Component({
  selector: 'app-pending',
  templateUrl: './pending.component.html',
  styleUrls: ['./pending.component.scss']
})
export class PendingComponent implements OnInit {
  private get:any;
  public transactions

  constructor(public location: Location,public us:UserService, public router:Router,public route: ActivatedRoute) {
    this.get = sessionStorage.getItem('transactionID')
    this.transactions = JSON.parse(this.get);
    console.log(this.transactions);
   }

  ngOnInit(): void {
  }
pay(i:number){
    this.us.transactionID = true;
    this.us.id = i;
    console.log(!!(this.router.getCurrentNavigation()?.previousNavigation));
    
    if (!!(this.router.getCurrentNavigation()?.previousNavigation)) {
      // We can safely go back to the previous location as 
      // we know it's within our app
    this.location.back()
    }
    else{
      // There's no previous navigation.
      // Here, we decide where to go. We go up one level
      this.router.navigate(["../inventory"],{relativeTo:this.route })
    }
}
clear(){
 this.transactions = sessionStorage.clear()
}
}
