import { Component, Input, OnInit } from '@angular/core';
import { IProduct, ITransaction } from '../../interface/admin.interface';
import { UserService } from '../../services/userService/user.service';

@Component({
  selector: 'transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.scss']
})
export class TransactionComponent implements OnInit {
  @Input() params: string = ''
  cond:boolean = false;
  userObj:any
  transactions:ITransaction[] = [];
  totalArr:number[] = []
  total:number = 0

  constructor(private user: UserService) {}
 

  ngOnInit(): void {
    this.userObj =  this.user.users.find((e)=>{
      return e.name == this.params
    });
    let { transaction }  = this.userObj;
    this.transactions = transaction;
  }

}
