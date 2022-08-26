import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UserService } from 'src/app/admin/services/userService/user.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit,OnDestroy {
 cashier:any;
 destroy:any;
 getIndex:any;
 datum:any[] | any = [];
 block= 'd-block'
 get:any
  constructor(
    @Inject(MAT_DIALOG_DATA) public data:any, 
    public dialogRef: MatDialogRef<NotificationComponent>,
    public us: UserService
  ) { }

  ngOnInit(): void {    
   this.destroy = this.us.getData().subscribe(
      res=>{
      this.datum = res
      this.getIndex =  this.datum.findIndex((e:any)=>{
          return e.email == sessionStorage.getItem('params')
        })
        this.cashier =  this.datum[this.getIndex].fullname     
      }
    )
  }

  cancel(){
    this.dialogRef.close()
  }
  print(){
      this.block = 'd-none'
      this.cashier =  this.datum[this.getIndex].fullname
    if(!this.datum[this.getIndex].transactions){this.get = {transactions: [this.data[0]]};this.patch()}
    else{
      this.datum[this.getIndex].transactions.push(this.data[0]);
      this.get = {transactions: this.datum[this.getIndex].transactions}
      this.patch()
      }
      setTimeout(()=>{print();location.reload()})
  }


    patch(){
      try {
    this.destroy =this.us.patchData(this.datum[this.getIndex].id,this.get).subscribe(
          res=>{
            console.log(res);
          })
        } catch (error) {
          console.log(error);
    }
}

ngOnDestroy(): void {
  this.destroy.unsubscribe()
}
}
