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
  postDrugs(data:IProductlist){
    return this.api.post(this.api.url + 'pharmacy', data)
  }
  delete(i:number){
    return this.api.delete(this.api.url + 'pharmacy/'+i)
  }
  patchData(i:number,data:any){
    return this.api.patch(this.api.url + 'pharmacy/' + `${i}`, data)
  }

}
