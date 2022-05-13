import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-user',
  template: `
  <div style="height: 100vh; overflow: scroll;">
  <button class="admin btn d-block float-end" (click)="onNoClick()">✕</button>
  <div class='px-3 mb-3'>
  <app-create></app-create>
  </div>
  </div>
  `
})
export class AddUserComponent implements OnInit {

  constructor(private dialogRef:MatDialogRef<AddUserComponent>) { }

  ngOnInit(): void {
  }
  onNoClick(){
    this.dialogRef.close();
  }
}
