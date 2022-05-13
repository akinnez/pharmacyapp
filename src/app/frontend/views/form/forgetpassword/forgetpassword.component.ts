import { Component, OnInit } from '@angular/core';
import { EmailValidator, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forgetpassword',
  templateUrl: './forgetpassword.component.html',
  styleUrls: ['./forgetpassword.component.scss']
})
export class ForgetpasswordComponent implements OnInit {
cond:boolean = false
progressbar:string = 'd-none'
  constructor(private fb:FormBuilder) { }
  
  form:FormGroup = this.fb.group({
    email:['',[Validators.email,Validators.required]]
  })
  ngOnInit(): void {
  }
navigate(){
  if(this.form.invalid){
    return
  }
  this.progressbar = 'd-block'
  this.cond = true;
}
}
