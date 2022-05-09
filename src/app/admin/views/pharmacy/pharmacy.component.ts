import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { AddDrugsComponent } from '../../shared/add-drugs/add-drugs.component';

@Component({
  selector: 'app-pharmacy',
  templateUrl: './pharmacy.component.html',
  styleUrls: ['./pharmacy.component.scss']
})
export class PharmacyComponent implements OnInit {
formdata:FormGroup = this.fb.group({
  search:['']
})
  constructor(public fb:FormBuilder, private dialog:MatDialog) { }

  ngOnInit(): void {
  }
  openDialog(){
    console.log('working');
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true
    dialogConfig.disableClose = true
     this.dialog.open(AddDrugsComponent, dialogConfig);

  }
}
