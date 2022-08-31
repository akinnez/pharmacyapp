import { Component, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/admin/services/userService/user.service';

@Component({
  selector: 'app-admin-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit,OnDestroy {
  formList = [
    {label:'Username', form:'username', type:'text'},
    {label:'Password', form:'password', type:'password'},
  ]
  progressbar:string = 'd-none';
  user:any;
  destroy:any;
  cond:boolean = false
  constructor(private fb:FormBuilder, private users:UserService,public route:Router) {}
  form = this.fb.group({
    username:['',[Validators.required,Validators.minLength(4)]],
    password:['',[Validators.required,Validators.minLength(8),Validators.maxLength(16)]]
  }) 
  ngOnInit(): void {}
navigate(){
  if(this.form.invalid){
    return alert('Please, Fill out the fields')
  }
 this.destroy = this.users.getAdminData().subscribe(
  res =>{
  console.log(res);
  this.user = res.find((e:any) =>{
    return e.username == (this.form.value).username
  })
    if(!this.user){ 
      alert('Incorrect username or password')
      return this.progress(false,'d-none')
    }
    if(this.user.password !== (this.form.value).password){ 
      alert('Incorrect username or password')
      return this.progress(false,'d-none')
    }
    else{sessionStorage.setItem('admin',this.user.username); this.route.navigate(['/admin/dashboard'])}
  }
 )
 this.progress(true,'d-block')
}
progress(bool:boolean, bar:string){
  this.cond = bool,
  this.progressbar = bar;
}

ngOnDestroy() {
  this.destroy.unsubscribe()
}
}
