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
    // this.dialogRef.close();
    // console.log(this.data.id);
    // this.userdata.users.splice(this.data.id,1) 
    this.userdata.getData().subscribe(
      res => {
        console.log(res[this.data.id].id)
      this.userdata.deleteUser(res[this.data.id].id).subscribe(
      res => {
        console.log(res)
        this.dialogRef.close();
        setTimeout(()=>location.reload(),1000)
      },
      err => console.log(err)
    )
      },
      err => console.log(err)
      
    )
      
    
  }
}
