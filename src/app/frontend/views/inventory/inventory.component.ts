import { Location } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Router,ActivatedRoute } from '@angular/router';
import { IProductlist } from 'src/app/admin/interface/admin.interface';
import { PharmacyServiceService } from 'src/app/admin/services/pharmacyService/pharmacy-service.service';
import { SupermarketService } from 'src/app/admin/services/supermarket/supermarket.service';
import { UserService } from 'src/app/admin/services/userService/user.service';
import { NotificationComponent } from '../../shared/notification/notification.component';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.scss']
})
export class InventoryComponent implements OnInit,OnDestroy{
  cond:boolean = false;
  destroy:any;
  searchValue:any;
  datas:any[]=[];
  data:any[] | any;
  newData:IProductlist[]=[];
  dataFilter:IProductlist[] = [];
  datFilter:any[] = [];
  sumTotal:number[] = [];
  qtty:number = 1;
  num:number = 0 | Number.NEGATIVE_INFINITY;
  productArr:IProductlist[] = []

  constructor(
    private fb:FormBuilder,
    private ps:PharmacyServiceService,
    private ss: SupermarketService,
    private us: UserService,
    private route: ActivatedRoute,
    private router: Router,
    private location:Location,
    public dialog:MatDialog
    ) { }

  form = this.fb.group({
    search:['',[Validators.required]],
  })

  ngOnInit(){
    if(this.us.transactionID){
      this.data = sessionStorage.getItem('transactionID')
      this.datas = JSON.parse(this.data)[this.us.id].transaction
      this.datas.forEach((e,i)=>{
          this.sumTotal[i] = e.sum
         this.reduce()
      })
  
    }

      try {
      this.destroy = this.ps.getDrugs().subscribe(
          res=>{
            res.forEach((e:any) => {
              e.category = 'pharmacy';
              this.productArr.push(e)
            });
          }
        )
       this.destroy = this.ss.getSuper().subscribe(
          res=>{
            res.forEach((e:any) => {
              e.category = 'supermarket';
              this.productArr.push(e)
            });
          }
        )
      } catch (error) {
        console.log(error); 
      }
      
      this.newData = this.productArr
  }

  navigate(){
    if(this.form.invalid)return
    this.dataFilter = this.productArr
  this.searchValue = (this.form.value.search).trim().toLowerCase()
    this.datFilter = this.dataFilter.filter((e:any)=>{
      return (
        e.name.toLowerCase().includes(this.searchValue)||
        e.itemCode.toString().includes(this.searchValue)||
        e.companyName.toLowerCase().includes(this.searchValue)
        )    
    })
    if (this.datFilter.length !== 0) {
       this.dataFilter = this.datFilter
       this.cond = !true;
       return
    }
     if (this.datFilter.length == 0) this.cond = true;
  }

  inc(i:number){
    this.datas[i].qtty++;
    this.sum(i);
    this.sumTotal[i] = this.datas[i].sum
    this.reduce()
  }

  dec(i:number){
    if (this.datas[i].qtty <= 1) return;
    this.datas[i].qtty--
    this.sum(i);
     this.sumTotal[i] = this.datas[i].sum
    this.reduce()
  }
  post(i:number){
    this.datFilter[i].qtty = 1;
    this.datas.push(this.datFilter[i]);
    this.datFilter.splice(i,1)
}

  makePayment(){
    if (this.datas.length == 0) {
      return
    }
    this.data = {
      transactionId:Math.floor(Math.random() * 1000000000),
      date: new Date().toLocaleDateString(),
      time: new Date().toLocaleTimeString(),
      transaction:this.datas,
      total: this.num
    }

      const dialogConfig = new MatDialogConfig();
      dialogConfig.autoFocus = true
      dialogConfig.disableClose = true
       this.dialog.open(NotificationComponent,{
        data:[this.data,this.num]
       });
  }
  pending(){
    if (this.datas.length == 0) {
      return
    }
    if (!sessionStorage.getItem('transactionID')) {
      this.data = []
     this.toStorage()
    }else{
        this.searchValue = sessionStorage.getItem('transactionID')
        this.data = JSON.parse(this.searchValue)
        this.toStorage()
     }
    if (!!(this.router.getCurrentNavigation()?.previousNavigation)) {
      // We can safely go back to the previous location as 
      // we know it's within our app
      this.location.back()
    }
    else{
      // There's no previous navigation.
      // Here, we decide where to go. We go up one level
      this.router.navigate([".."],{relativeTo:this.route})
    }
  }
toStorage(){
  this.data.push({
    transactionId:Math.floor(Math.random() * 1000000000),
     transaction:this.datas
   })
   sessionStorage.setItem('transactionID',JSON.stringify(this.data))
}
  reduce(){
  if (this.sumTotal.length == 0){this.num = 0; return};
    this.num =  this.sumTotal.reduce((a,b)=>{return a + b})
  }
sum(i:number){this.datas[i].sum = this.datas[i].price * this.datas[i].qtty}

del(i:number){
  this.datas.splice(i,1)
  this.sumTotal.splice(i,1)
  this.reduce()
}

  ngOnDestroy() {
    this.destroy.unsubscribe(); 
   }
}
