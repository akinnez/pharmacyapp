import { Injectable } from '@angular/core';
import { ApiService } from 'src/app/shared/api.service';
import { environment } from 'src/environments/environment';
import { IProductlist } from '../../interface/admin.interface';

@Injectable({
  providedIn: 'root'
})
export class SupermarketService {
superlist:IProductlist[] = []
  constructor(private api:ApiService) { }

  getSuper(){
    return this.api.get(environment.url + 'supermarket')
  }
}
