import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-goods',
  template:`
  <div style="height: 100vh; overflow: scroll;">
  <button class="admin btn d-block float-end" (click)="onNoClick()">✕</button>
  <div class='px-3 mb-3'>
  <mat-tab-group mat-align-tabs="center" color="accent" animationDuration="1000ms">
  <mat-tab label="Bulk">
      <div>
      <bulk section="goods"></bulk>
      </div>
   </mat-tab>
  <mat-tab label="Units" >
  <add-goods-form></add-goods-form>
  </mat-tab>
</mat-tab-group>


 
  </div>
  </div>`
})
export class AddGoodsComponent implements OnInit {

  constructor(private dialogRef:MatDialogRef<AddGoodsComponent>) { }

  ngOnInit(): void {
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
}
