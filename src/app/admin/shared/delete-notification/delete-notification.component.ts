import { Component, OnInit,Inject } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { UserService } from '../../services/userService/user.service';

@Component({
  selector: 'notification',
  templateUrl: './delete-notification.component.html',
  styleUrls: ['./delete-notification.component.scss']
})
export class DeleteNotificationComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: {id:number, name:string}, 
    public userdata:UserService,
    public dialogRef: MatDialogRef<DeleteNotificationComponent>) { }

  ngOnInit(): void {
  }
  closeDialog(){
    this.dialogRef.close();
  }
  delete(){
  this.userdata.users = this.userdata.users.splice(this.data.id,1) 
  this.dialogRef.close();
  }
}
