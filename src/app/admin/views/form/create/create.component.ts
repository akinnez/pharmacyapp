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
    {label:'Phone Number', form:'phoneNumber', type:'number',text:'Enter your 11 digits number'},
    {label:'Age', form:'age', type:'number'},
    {label:'Upload Image', form:'image', type:'file', accept:'image/*'},
    {label:'Username', form:'username', type:'text', text:'Min. of 4 character'},
    {label:'Password', form:'password', type:'password', text:'Min. of 4 character'},
  ]
  progressbar:string = 'd-none'
  check:any;
  cond:boolean = false
  constructor(private fb:FormBuilder, public user: UserService) { }
  form = this.fb.group({
    fullname:['',Validators.required],
    email:['',Validators.email],
    phoneNumber:["",[Validators.required,Validators.maxLength(11),Validators.pattern('^([0-9]{11})$')]],
    age:['',Validators.required],
    image:['',Validators.required],
    username:['',[Validators.required,Validators.minLength(4)]],
    password:['',[Validators.required,Validators.minLength(4),Validators.maxLength(16)]]
  })

  ngOnInit(): void {
  }
 navigate(event:any){
    if (this.form.invalid) {
      alert('Please check the field(s) properly')
      return
    }


    this.form.value.phoneNumber = event.target[2].valueAsNumber
    this.form.value.age = event.target[3].valueAsNumber
   const reader = new FileReader()
   
   if ((event.target[4].files[0].size / 1024) <= 300) {
       reader.readAsDataURL(event.target[4].files[0])
       reader.onload = async()=>{
        this.form.value.image = reader.result
        try {
          this.user.postData(this.form.value).subscribe(
           res => console.log(res))
        } catch (error) {
          console.log(error)
        }
       }
       reader.onerror = (err)=>{
        console.log(err);
    }
   }else{
    alert('Image file must not be more than 300kb')
    return
   }      
   
   setTimeout(()=> location.reload())
    }
}
