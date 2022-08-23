import { Injectable } from '@angular/core';
import { ApiService } from 'src/app/shared/api.service';
import { environment } from 'src/environments/environment';
import { IProductlist } from '../../interface/admin.interface';

@Injectable({
  providedIn: 'root'
})
export class PharmacyServiceService {
medlist:IProductlist[] = []

  constructor(public api: ApiService) { }

  getDrugs(){
    return this.api.get(this.api.url + 'pharmacy')
  }
  postDrugs(data:object){
    return this.api.post(this.api.url + 'pharmacy', data)
  }

}
