import { Injectable } from '@angular/core';
import { IData } from '../../interface/admin.interface';



@Injectable({
  providedIn: 'root'
})
export class ChartService {

  constructor() { 
  }

  public data:IData[] = 
  [{
    label: 'Pharmacy Sales',
    data: [0,0,0,0,0,0,0,0,0,0,0,0],
    borderColor: 'rgb(75, 192, 192)'
  },{
    label:'Supermarket Sales',
    data: [0,0,0,0,0,0,0,0,0,0,0,0],
    borderColor: 'rgba(13, 17, 50)'
  }]

}
