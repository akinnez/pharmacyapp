import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/admin/services/userService/user.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit,OnDestroy {
  destroy:any
  user:any
  formList = [
    {label:'Username', form:'username', type:'text'},
    {label:'Password', form:'password', type:'password'},
  ]
  progressbar:string = 'd-none'
  cond:boolean = false
  constructor(private fb:FormBuilder, private users:UserService, public route:Router) { }
  form = this.fb.group({
    username:['',[Validators.required,Validators.minLength(4)]],
    password:['',[Validators.required,Validators.minLength(8),Validators.maxLength(16)]]
  })
  ngOnInit(): void {
    
  }

navigate(){
  if(this.form.invalid){
    return
  }
  this.destroy = this.users.getData().subscribe(
    res =>{
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
      else { sessionStorage.setItem('params',this.user.email),this.route.navigate([`user/${this.user.fullname}`])}
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
