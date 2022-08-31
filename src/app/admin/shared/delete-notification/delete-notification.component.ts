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
    try {
      this.userdata.getData().subscribe(
        res => {
        try {
          this.userdata.deleteUser(res[this.data.id].id).subscribe(
            res => {
              console.log(res)
              this.dialogRef.close();
              setTimeout(()=>location.reload(),1000)
            })
        } catch (error) {console.log(error);}
    })
    } catch (error) {console.log(error);}     
  }
}
