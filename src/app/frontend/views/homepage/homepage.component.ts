import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { PharmacyServiceService } from 'src/app/admin/services/pharmacyService/pharmacy-service.service';
import { FlashNoticeComponent } from '../../shared/flash-notice/flash-notice.component';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit,OnDestroy {
  params:any;
  private diff:string =''
  lessthan:any
  get:any
  constructor(private route:ActivatedRoute,public ps:PharmacyServiceService,private dialog:MatDialog) { }

  ngOnInit() {
    this.get = this.route.params.subscribe(params =>{
      this.params = params['name']
    })

    try {
      this.ps.getDrugs().subscribe(
        res=>{
          this.lessthan = res.filter((e:any):any=>{
            if (e.qtty > 0 && e.qtty <=15) {
              this.diff = "less than 15"
              console.log(this.diff)
              return e.qtty <= 15 
            }else
            if(e.qtty == 0){
              this.diff = "out of stock"
              console.log(this.diff)
              return  e.qtty == 0
            }
          })
          console.log(this.diff)
          if(!this.lessthan)return
          else this.openAlert(this.lessthan,this.diff)
        }
      )
     
    } catch (error) {
      
    }
  }
  openAlert(data:any,info:string):void{
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true
    dialogConfig.disableClose = true
     this.dialog.open(FlashNoticeComponent,{
      data:{data,info}
     });
  
  }
  ngOnDestroy() {
    this.get.unsubscribe()
  }
}
