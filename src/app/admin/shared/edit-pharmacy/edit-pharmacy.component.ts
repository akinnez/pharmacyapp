import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IProductlist } from '../../interface/admin.interface';

@Component({
  selector: 'app-edit-pharmacy',
  template: `<div style="height: 100vh; overflow: scroll;">
    <button class="admin btn d-block float-end" (click)="onNoClick()">✕</button>
    <div class="px-3 mb-3">
      <pharmacyedit [data]="data"></pharmacyedit>
    </div>
  </div> `,
})
export class EditPharmacyComponent implements OnInit {
  constructor(
    private dialogRef: MatDialogRef<EditPharmacyComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IProductlist
  ) {}

  ngOnInit() {}
  onNoClick(): void {
    this.dialogRef.close();
  }
}
