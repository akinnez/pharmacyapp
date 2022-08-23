import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import * as e from 'express';
import { IProductlist } from 'src/app/admin/interface/admin.interface';
import { PharmacyServiceService } from 'src/app/admin/services/pharmacyService/pharmacy-service.service';

@Component({
  selector: 'app-pharmacy',
  templateUrl: './pharmacy.component.html',
  styleUrls: ['./pharmacy.component.scss']
})
export class PharmacyComponent implements OnInit,OnDestroy {
  cond:boolean = false;
  destroy:any;
  searchValue:string ='';
  data:IProductlist[]=[];
  dataFilter:IProductlist[] = [];
  datFilter:IProductlist[] = [];
  formdata = this.fb.group({
    search:['',[Validators.required]],
  })
  constructor(private fb: FormBuilder,private pharmacyService: PharmacyServiceService) {}

  ngOnInit() {
    try {
      this.destroy =  this.pharmacyService.getDrugs().subscribe(
        res =>{
          if (res.length == 0) {
            this.cond = true;
          }
          this.dataFilter = this.data = res;
        })
    } catch (error) {
      console.log(error);  
        }
   }

    navigate(){
      if(this.formdata.invalid){
        return
      }
     this.dataFilter = this.data;
    this.searchValue = (this.formdata.value.search).trim()
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
       if (this.datFilter.length == 0) {
        this.cond = true;
        }
    }

   
    ngOnDestroy() {
     this.destroy.unsubscribe(); 
    } 
}
