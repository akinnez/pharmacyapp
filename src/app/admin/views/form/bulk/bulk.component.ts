import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'bulk',
  templateUrl: './bulk.component.html',
  styleUrls: ['./bulk.component.scss']
})
export class BulkComponent implements OnInit {
  @Input() section:string = '';
formBulk:FormGroup
  constructor(private fb:FormBuilder) {
    this.formBulk = this.fb.group({
      bulk:['']
    })
   }

  ngOnInit(): void {
  }
  bulkgoods(){}
  bulkdrugs(){}
}
