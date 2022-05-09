import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'supermarketedit',
  templateUrl: './supermarketedit.component.html',
  styleUrls: ['./supermarketedit.component.scss']
})
export class SupermarketeditComponent implements OnInit {
  @Input() data: any;
  imgPix:number = 50
  form: FormGroup;
  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      src: ['', Validators.required],
      name: ['', Validators.required],
      companyName: ['', Validators.required],
      itemCode: ['', [Validators.required,Validators.pattern('^([0-9])$')]],
      qtty: ['', [Validators.required,Validators.pattern('^([0-9])$')]],
      price: ['', [Validators.required,Validators.pattern('^([0-9])$')]],
      mfd: ['', Validators.required],
      exp: ['', Validators.required],
    });

}
ngOnInit(): void {
}
navigate(){
  
}
}
