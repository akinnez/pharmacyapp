import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PharmacyServiceService {
medlist = [{
  src: '../../assets/images/admin/pineapple_PNG2750.png',
  name: 'bonababe',
  companyName:'Tuyil',
  qtty: 50,
  price: 300,
}]
  constructor() { }
}
