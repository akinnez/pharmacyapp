import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { PharmacyServiceService } from '../../services/pharmacyService/pharmacy-service.service';
import { EditPharmacyComponent } from '../edit-pharmacy/edit-pharmacy.component';

@Component({
  selector: 'pharmacylist',
  templateUrl: './pharmacylist.component.html',
  styleUrls: ['./pharmacylist.component.scss']
})
export class PharmacylistComponent implements OnInit {
  cond:boolean = false
  condition:boolean = true
medlist:any
imgPix = 25
  constructor(private medicinelist:PharmacyServiceService,public dialog:MatDialog) { }

  ngOnInit(): void {
    this.medlist = this.medicinelist.medlist
    this.checkActivities()
  }


  checkActivities(){
    if(this.medlist.length == 0){
      this.cond = true; 
      this.condition = false
  }
}

  openDialog(index:any) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true
    dialogConfig.disableClose = true
    dialogConfig.data = this.medicinelist.medlist[index]
     this.dialog.open(EditPharmacyComponent, dialogConfig);
      console.log(index);
  }
  

}
