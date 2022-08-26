import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { SupermarketService } from '../../services/supermarket/supermarket.service';
import { EditSupermarketComponent } from '../edit-supermarket/edit-supermarket.component';

@Component({
  selector: 'supermarketlist',
  templateUrl: './supermarketlist.component.html',
  styleUrls: ['./supermarketlist.component.scss']
})
export class SupermarketlistComponent implements OnInit,OnDestroy {
  cond:boolean = false
  condition:boolean = true
  superlist:any;
  destroy:any
  startIndex:any;
  endIndex:any;
  pageSlice:any;
  constructor(private supermarketlist:SupermarketService,public dialog:MatDialog) { }

  ngOnInit(): void {
      try {
      this.destroy = this.supermarketlist.getSuper().subscribe(
          res => {
            this.superlist = res;
            this.pageSlice = (this.superlist.slice(0, 10));
            this.checkActivities()
          }
        )
      } catch (error) {
        console.log(error);
      }
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
  }

  onPageChange(event:any){
    this.startIndex = event.pageIndex * event.pageSize;
    this.endIndex = this.startIndex + event.pageSize
    this.pageSlice = this.superlist.slice(this.startIndex,this.endIndex);
    (this.endIndex > this.superlist.length ? this.endIndex = this.superlist.length : this.pageSlice = this.superlist.slice(this.startIndex,this.endIndex));
}
ngOnDestroy(){
  this.destroy.unsubscribe()
}

}