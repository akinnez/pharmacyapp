import { Injectable } from '@angular/core';
import { IProductlist } from '../../interface/admin.interface';

@Injectable({
  providedIn: 'root'
})
export class SupermarketService {
superlist:IProductlist[] = []
  constructor() { }
}
