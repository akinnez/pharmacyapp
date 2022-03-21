import { Injectable } from '@angular/core';
import { ISummary } from '../../interface/admin.interface';


@Injectable({
  providedIn: 'root'
})



export class SummaryService {
  listSummary:ISummary[] = []
  constructor() { }

  summary(){
   return this.listSummary = [
      {info:'Total Stock in Supermarket',value: 20},
      {info:'Total Medicine in Stock',value: 20},
      {info:'Number of Sales in Supermarket',value: 20},
      {info:'Number of Medicine Sold',value: 20}
    ]
  }
}
