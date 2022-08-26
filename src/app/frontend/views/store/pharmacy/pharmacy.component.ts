import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
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
  startIndex:any;
  endIndex:any;
  pageSlice:any;
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
          this.pageSlice = this.dataFilter.slice(0,10)
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
    this.searchValue = (this.formdata.value.search).trim().toLowerCase()
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
onPageChange(event:any){
this.startIndex = event.pageIndex * event.pageSize;
this.endIndex = this.startIndex + event.pageSize
this.pageSlice = this.dataFilter.slice(this.startIndex,this.endIndex);
(this.endIndex > this.dataFilter.length ? this.endIndex = this.dataFilter.length : this.pageSlice = this.dataFilter.slice(this.startIndex,this.endIndex));

}
   
    ngOnDestroy() {
     this.destroy.unsubscribe(); 
    } 
}
