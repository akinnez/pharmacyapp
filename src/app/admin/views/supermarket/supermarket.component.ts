import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { AddGoodsComponent } from '../../shared/add-goods/add-goods.component';


@Component({
  selector: 'app-supermarket',
  templateUrl: './supermarket.component.html',
  styleUrls: ['./supermarket.component.scss']
})
export class SupermarketComponent implements OnInit {
  formdata:FormGroup = this.fb.group({
    search:['']
  })
  constructor(private fb:FormBuilder, private dialog:MatDialog) { }

  ngOnInit(): void {
  }
  openDialog(){
    console.log('working');
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true
    dialogConfig.disableClose = true
     this.dialog.open(AddGoodsComponent, dialogConfig);
  }

}
