import { Injectable, OnInit } from '@angular/core';
import { ApiService } from 'src/app/shared/api.service';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  route:string = 'users';
  userData:any
  transactionID:boolean = false;
  id:number | any
constructor(private apiService: ApiService) { 
 }

 postData(data:object){
  return this.apiService.post(this.apiService.url + this.route, data)
}

getData(){
  return this.apiService.get(this.apiService.url + this.route)
}
getAdminData(){
  return this.apiService.get(this.apiService.url + 'admins')
}
patchData(i:number,data:any){
  return this.apiService.patch(this.apiService.url + this.route + `/${i}`, data)
}
deleteUser(i:number){
  return this.apiService.delete(this.apiService.url + this.route + `/${i}`,)
}

check(){
  this.getData().subscribe(
    res =>{
      this.userData = res.find((e:any)=>{
        return e.email === sessionStorage.getItem('params')
      })
      return this.userData
    }
  )
}
}