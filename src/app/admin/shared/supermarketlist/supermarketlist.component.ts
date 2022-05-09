import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { SupermarketService } from '../../services/supermarket/supermarket.service';
import { EditSupermarketComponent } from '../edit-supermarket/edit-supermarket.component';

@Component({
  selector: 'supermarketlist',
  templateUrl: './supermarketlist.component.html',
  styleUrls: ['./supermarketlist.component.scss']
})
export class SupermarketlistComponent implements OnInit {
  cond:boolean = false
  condition:boolean = true
superlist:any
imgPix = 25
  constructor(private supermarketlist:SupermarketService,public dialog:MatDialog) { }

  ngOnInit(): void {
    this.superlist = this.supermarketlist.superlist
    this.checkActivities()
  }


  checkActivities(){
    if(this.superlist.length == 0){
      this.cond = true; 
      this.condition = false
   }
  }
  openDialog(index:any) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true
    dialogConfig.disableClose = true
    dialogConfig.data = this.supermarketlist.superlist[index]
     this.dialog.open(EditSupermarketComponent, dialogConfig);
      console.log(index);
  }
}