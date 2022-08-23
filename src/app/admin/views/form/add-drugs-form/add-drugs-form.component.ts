import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PharmacyServiceService } from 'src/app/admin/services/pharmacyService/pharmacy-service.service';

@Component({
  selector: 'add-drugs-form',
  templateUrl: './add-drugs-form.component.html',
  styleUrls: ['./add-drugs-form.component.scss']
})
export class AddDrugsFormComponent implements OnInit {
  form:FormGroup;
  constructor(private fb:FormBuilder, private pharmacyService: PharmacyServiceService) { 
    this.form = this.fb.group({
      name:[''],
      companyName:[''],
      itemCode:[''],
      qtty:[0],
      price:[0],
      mfd:[''],
      exp:[''],
    });


  }

  ngOnInit(): void {
  }
navigate(){
  try {
    this.pharmacyService.postDrugs(this.form.value).subscribe(
      res =>{
        console.log(res);
      }
    )
  } catch (error) {
    console.log(error);
    
  }
  
console.log(this.form.value)
}
}
