import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { PharmacyServiceService } from '../../services/pharmacyService/pharmacy-service.service';
import { EditPharmacyComponent } from '../edit-pharmacy/edit-pharmacy.component';

@Component({
  selector: 'pharmacylist',
  templateUrl: './pharmacylist.component.html',
  styleUrls: ['./pharmacylist.component.scss']
})
export class PharmacylistComponent implements OnInit,OnDestroy {
  cond:boolean = false
  condition:boolean = true;
  destroy:any;
  medlist:any;
  startIndex:any;
  endIndex:any;
  pageSlice:any;
  constructor(private medicinelist:PharmacyServiceService,public dialog:MatDialog) { }

  ngOnInit(): void {
    try {
      this.destroy = this.medicinelist.getDrugs().subscribe(
        res =>{
          this.medlist = res;
          this.pageSlice = (this.medlist.slice(0, 10));
          this.checkActivities()
        }
      )
    } catch (error) {
      console.log(error);
    }
   
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
  onPageChange(event:any){
      this.startIndex = event.pageIndex * event.pageSize;
      this.endIndex = this.startIndex + event.pageSize
      this.pageSlice = this.medlist.slice(this.startIndex,this.endIndex);
      (this.endIndex > this.medlist.length ? this.endIndex = this.medlist.length : this.pageSlice = this.medlist.slice(this.startIndex,this.endIndex));
  }
  
  ngOnDestroy(): void {
    this.destroy.unsubscribe()
  }

}
