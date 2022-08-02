import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-drugs',
  template:`
  <div style="height: 100vh; overflow: scroll;">
  <button class="admin btn d-block float-end"  (click)="onNoClick()">✕</button>
  <div class="px-3 mt-5 mb-3">
  <mat-tab-group mat-align-tabs="center" color="accent" animationDuration="1000ms">
      <mat-tab label="Bulk">
          <div>
          <bulk section="drugs"></bulk>
          </div>
       </mat-tab>
      <mat-tab label="Units" >
      <add-drugs-form></add-drugs-form>
      </mat-tab>
  </mat-tab-group>
</div>
  </div>
  `
})
export class AddDrugsComponent implements OnInit {

  constructor(private dialogRef:MatDialogRef<AddDrugsComponent>) { }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
