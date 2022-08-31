import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PharmacyServiceService } from 'src/app/admin/services/pharmacyService/pharmacy-service.service';

@Component({
  selector: 'pharmacyedit',
  templateUrl: './pharmacyedit.component.html',
  styleUrls: ['./pharmacyedit.component.scss'],
})
export class PharmacyeditComponent implements OnInit,OnDestroy {
  @Input() data: any;
  dataForm:any
  destroy:any
  form: FormGroup;
  selectlist:string[] = ['Tablets','Expectorant','Soft Gel','Suspension','Ointments','Lotion','Paste',"Spray","Inhalants","Others"]
  constructor(private fb: FormBuilder, private ps:PharmacyServiceService) {
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
   try {
    this.destroy = this.ps.getDrugs().subscribe(
      res=>{
        this.dataForm = res[this.data.index];
      }
    )
   } catch (error) {
    console.log(error);
   }
  }
  navigate() {
    if (this.form.invalid) {
    return alert('Please fill out the all the fields appropriately')
    }
    this.updateData()
    setTimeout(()=>location.reload())
  }

  updateData():void{
    try {
      this.destroy =   this.ps.patchData(this.dataForm.id,this.form.value).subscribe(
        res =>{console.log(res);
        })
    } catch (error) {
      console.log(error)
    }
  }
ngOnDestroy(): void {
 this.destroy.unsubscribe() 
}
}
