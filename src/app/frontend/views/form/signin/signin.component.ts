import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  formList = [
    {label:'Username', form:'username', type:'text'},
    {label:'Password', form:'password', type:'password'},
  ]
  progressbar:string = 'd-none'
  cond:boolean = false
  constructor(private fb:FormBuilder) { }
  form = this.fb.group({
    username:['',[Validators.required,Validators.minLength(4)]],
    password:['',[Validators.required,Validators.minLength(8),Validators.maxLength(16)]]
  })
  ngOnInit(): void {
    
  }
navigate(){
  this.cond = true
}
}
