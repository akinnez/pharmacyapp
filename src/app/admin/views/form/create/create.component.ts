import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  formList = [
    {label:'Full Name', form:'fullname', type:'text'},
    {label:'Email Address', form:'email', type:'email'},
    {label:'Phone Number', form:'phoneNumber', type:'text'},
    {label:'Upload Image', form:'image', type:'file'},
    {label:'Username', form:'username', type:'text'},
    {label:'Password', form:'password', type:'password'},
  ]
  progressbar:string = 'd-none'
  cond:boolean = false
  constructor(private fb:FormBuilder) { }
  form = this.fb.group({
    fullname:['',Validators.required],
    email:['',Validators.email],
    phoneNumber:['',Validators.required],
    image:['',Validators.required],
    username:['',[Validators.required,Validators.minLength(4)]],
    password:['',[Validators.required,Validators.minLength(8),Validators.maxLength(16)]]
  })

  ngOnInit(): void {
  }
  navigate(){

  }
}
