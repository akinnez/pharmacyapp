import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IProductlist } from '../../interface/admin.interface';

@Component({
  selector: 'edit-supermarket',
  template:`<div style="height: 100vh; overflow: scroll;">
  <button class="admin btn d-block float-end" (click)="onNoClick()">✕</button>
  <div class="px-3 mb-3">
    <supermarketedit [data]="data"></supermarketedit>
  </div>
</div> `

})
export class EditSupermarketComponent implements OnInit {

  constructor(
    private dialogRef: MatDialogRef<EditSupermarketComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IProductlist
  ) { }

  ngOnInit(): void {
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
}
