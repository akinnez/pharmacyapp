import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'add-goods-form',
  templateUrl: './add-goods.component.html',
  styleUrls: ['./add-goods.component.scss']
})
export class AddGoodsFormComponent implements OnInit {
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
    })
  }


  ngOnInit(): void {
  }
navigate(){}
}
