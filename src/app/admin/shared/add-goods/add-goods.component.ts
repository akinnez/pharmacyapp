import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-goods',
  template:`
  <div style="height: 100vh; overflow: scroll;">
  <button class="admin btn d-block float-end" (click)="onNoClick()">✕</button>
  <div class='px-3 mb-3'>
  <add-goods-form></add-goods-form>
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
