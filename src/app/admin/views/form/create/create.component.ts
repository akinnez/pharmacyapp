import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UserService } from 'src/app/admin/services/userService/user.service';

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
    {label:'Age', form:'age', type:'number'},
    {label:'Upload Image', form:'image', type:'file'},
    {label:'Username', form:'username', type:'text'},
    {label:'Password', form:'password', type:'password'},
  ]
  progressbar:string = 'd-none'
  cond:boolean = false
  constructor(private fb:FormBuilder, public user: UserService) { }
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
    if (this.form.invalid) {
      return
    }
    console.log(this.form.value);

      this.user.postData(this.form.value).subscribe(
        res => console.log(res),
        err => console.log(err)
      )
      window.location.reload()
  }
}
