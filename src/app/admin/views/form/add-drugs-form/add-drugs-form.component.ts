import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'add-drugs-form',
  templateUrl: './add-drugs-form.component.html',
  styleUrls: ['./add-drugs-form.component.scss']
})
export class AddDrugsFormComponent implements OnInit {
  form:FormGroup;
  constructor(private fb:FormBuilder) { 
    this.form = this.fb.group({
      src:[''],
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
console.log(this.form.value)
}
}
