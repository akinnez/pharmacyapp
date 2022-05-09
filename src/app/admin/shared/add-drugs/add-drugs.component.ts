import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-drugs',
  template:`
  <div style="height: 100vh; overflow: scroll;">
  <button class="admin btn d-block float-end" (click)="onNoClick()">✕</button>
  <div class='px-3 mb-3'>
  <add-drugs-form></add-drugs-form>
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
