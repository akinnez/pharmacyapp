import { Injectable } from '@angular/core';
import { IProductlist } from '../../interface/admin.interface';

@Injectable({
  providedIn: 'root'
})
export class SupermarketService {
superlist:IProductlist[] = [
  {
    src:'../../../../assets/images/admin/pineapple_PNG2750.png',
    name: '',
    companyName:'',
    itemCode: 10,
    qtty:10,
    price: 0,
    mfd: '',
    exp: ''
  },
  {
    src:'../../../../assets/images/admin/R.jfif',
    name: 'bolaji johnson',
    companyName:'bolajijohnson Inc.',
    itemCode: 100,
    qtty:100,
    price: 10000,
    mfd: '',
    exp: ''
  }
]
  constructor() { }
}
