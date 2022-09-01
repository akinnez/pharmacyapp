import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PharmacyServiceService } from 'src/app/admin/services/pharmacyService/pharmacy-service.service';

@Component({
  selector: 'add-drugs-form',
  templateUrl: './add-drugs-form.component.html',
  styleUrls: ['./add-drugs-form.component.scss']
})
export class AddDrugsFormComponent implements OnInit,OnDestroy {
  form:FormGroup;
  destroy:any
  selectlist:string[] = ['Tablets','Expectorant','Soft Gel','Suspension','Ointments','Lotion','Paste',"Spray","Inhalants","Others"]
  constructor(private fb:FormBuilder, private pharmacyService: PharmacyServiceService) { 
    this.form = this.fb.group({
      name: ['', Validators.required],
      companyName: ['', Validators.required],
      itemCode: ['', [Validators.required,Validators.maxLength(13)]],
      qtty: ['', [Validators.required]],
      price: ['', [Validators.required]],
      size:['',Validators.required],
      forms:['',Validators.required],
      mfd: ['', Validators.required],
      exp: ['', Validators.required],
    });


  }
  ngOnInit(): void {
  }
navigate(){
  try {
   this.destroy =  this.pharmacyService.postDrugs(this.form.value).subscribe(
      res =>{
        console.log(res);
        setTimeout(()=> location.reload())
      }
    )
  } catch (error) {
    console.log(error);
    
  }
  
}
ngOnDestroy(): void {
  this.destroy.unsubscribe()
}
}
