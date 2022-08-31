import { Injectable } from '@angular/core';
import { ApiService } from 'src/app/shared/api.service';
import { environment } from 'src/environments/environment';
import { IProductlist } from '../../interface/admin.interface';

@Injectable({
  providedIn: 'root'
})
export class SupermarketService {
  constructor(private api:ApiService) { }

  getSuper(){
    return this.api.get(this.api.url + 'supermarket')
  }
  postGoods(data:object){
    return this.api.post(this.api.url + 'supermarket',data)
  }
  delete(i:number){
    return this.api.delete(this.api.url + 'supermarket' + `/${i}`,)
  }
}
