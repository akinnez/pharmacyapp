import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-flash-notice',
  templateUrl: './flash-notice.component.html',
  styleUrls: ['./flash-notice.component.scss']
})
export class FlashNoticeComponent implements OnInit {
  public newData
  constructor(
    @Inject(MAT_DIALOG_DATA) public data:any,
    public dialogRef: MatDialogRef<FlashNoticeComponent>,
  ) {
    this.newData = data.data
   }

  ngOnInit(): void {
  }
  cancel(){
    this.dialogRef.close()
  }
}
