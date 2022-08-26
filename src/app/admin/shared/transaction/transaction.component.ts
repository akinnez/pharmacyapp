import { DatePipe, formatDate } from '@angular/common';
import { Component, Inject, Input, LOCALE_ID, OnDestroy, OnInit, } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ITransaction } from '../../interface/admin.interface';
import { UserService } from '../../services/userService/user.service';

@Component({
  selector: 'transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.scss']
})
export class TransactionComponent implements OnInit,OnDestroy {
  @Input() params: string = ''
  destroy:any;
  startIndex:any;
  endIndex:any;
  cond:boolean = false;
  filterArray:any[] = []
  value:Date | any;
  datepipe: string | any = '';
  userObj:any
  pageSlice:any
  transacts:ITransaction[] = [];

  constructor(
    // @Inject(LOCALE_ID) private local:string,
    private user: UserService, private fb:FormBuilder,public datePipe:DatePipe) {
      this.value =  this.datePipe.transform(Date.now(),'dd/MM/yyyy');
     }
  form:FormGroup = this.fb.group({date:['']})

  ngOnInit() {
   try {
   this.destroy = this.user.getData().subscribe(
      res=>{
        this.userObj =  res.find((e:any)=>{
          return e.fullname == this.params || e.email == this.params
        })
        this.transacts = this.userObj.transactions;
        this.pageSlice = (this.transacts.slice(0, 5));
      }
    )
   } catch (error) {
    console.log(error);
   }
  }

  pickDate(){
    this.transacts = this.userObj.transactions;
    this.datepipe = this.datePipe.transform(this.form.value.date,'dd/MM/yyyy');
    this.filterArray = this.transacts.filter(e=>{
      return e.date == this.datepipe
    });
    if (this.filterArray.length == 0 ) {
      this.assign(true)
    }
    else{
      this.assign(false)
    }
  }
  assign(val:boolean){
    this.cond = val; 
      this.transacts = this.filterArray;
      return
  }
onPageChange(event:any){
  this.startIndex = event.pageIndex * event.pageSize;
  this.endIndex = this.startIndex + event.pageSize
  this.pageSlice = this.transacts.slice(this.startIndex,this.endIndex);
  (this.endIndex > this.transacts.length ? this.endIndex = this.transacts.length : this.pageSlice = this.transacts.slice(this.startIndex,this.endIndex));
}

  ngOnDestroy() {
    this.destroy.unsubscribe()
  }
}
