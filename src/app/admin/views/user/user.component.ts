import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { UserService } from '../../services/userService/user.service';
import { AddUserComponent } from '../../shared/add-user/add-user.component';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})

export class UserComponent implements OnInit {
  user:any
  cond:boolean = false
  condition:boolean = true

  constructor(public fb:FormBuilder, public users:UserService,private dialog:MatDialog) { }

  formdata = this.fb.group({
    search:['']
  }) 

  ngOnInit(): void {
    this.users.getData().subscribe(
      res => {
        this.user = res;
        this.checkActivities()
      },
      err => console.log(err)
  );
    
    
  }

  checkActivities(){
    if(this.user.length == 0){
      this.cond = true; 
      this.condition = false
  }
}
  navigate(){}
  openDialog(){
    console.log('working');
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true
    dialogConfig.disableClose = true
     this.dialog.open(AddUserComponent, dialogConfig);
  }
}
