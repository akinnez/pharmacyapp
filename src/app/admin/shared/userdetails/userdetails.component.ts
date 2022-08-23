import { Component, Input, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DeleteNotificationComponent } from '../delete-notification/delete-notification.component';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.scss']
})
export class UserdetailsComponent implements OnInit {
 @Input() name: string = '';
 @Input() img: string = '';
 @Input() email:string='';
 @Input() id:any;
 @Input() phoneNo:any;

  constructor(private dialog:MatDialog, private route:Router) { }
routee(){
  this.route.navigate(['admin/dashboard/users/info', this.name])

}
openDialog(){
  console.log("open");
  const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true
     this.dialog.open(DeleteNotificationComponent,{
      data: {id: Number(this.id), name:this.name },
     });
}

  ngOnInit(): void {
  }
 

}
