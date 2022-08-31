import { Injectable } from '@angular/core';
import { ISummary } from '../../interface/admin.interface';
import { PharmacyServiceService } from '../pharmacyService/pharmacy-service.service';
import { SupermarketService } from '../supermarket/supermarket.service';


@Injectable({
  providedIn: 'root'
})



export class SummaryService {
  listSummary:ISummary[] = []
  constructor(public ss:SupermarketService,public ps:PharmacyServiceService ) { }

  summary(){
    this.ss.getSuper().subscribe(
      res=>{
        this.listSummary[0].value = res.length
      }
    )
    this.ps.getDrugs().subscribe(
      res =>{
        this.listSummary[1].value = res.length
      }
    )
   return this.listSummary = [
      {info:'Total Stock in Supermarket',value: 0},
      {info:'Total Medicine in Stock',value: 0},
      {info:'Number of Sales in Supermarket',value: 0},
      {info:'Number of Medicine Sold',value: 0}
    ]
  }
}
