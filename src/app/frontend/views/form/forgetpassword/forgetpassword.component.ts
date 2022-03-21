import { Component, OnInit } from '@angular/core';
import { EmailValidator, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forgetpassword',
  templateUrl: './forgetpassword.component.html',
  styleUrls: ['./forgetpassword.component.scss']
})
export class ForgetpasswordComponent implements OnInit {
cond:boolean = false

  constructor(private fb:FormBuilder) { }
  form:FormGroup = this.fb.group({
    email:['',[Validators.email,Validators.required]]
  })
  ngOnInit(): void {
  }
navigate(){
  console.log(this.form.invalid);
  
  this.cond = true;
}
}
