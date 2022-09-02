import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { InlineWorker } from 'src/utils/inline.class';
import { PharmacyServiceService } from 'src/app/admin/services/pharmacyService/pharmacy-service.service';
import { FlashNoticeComponent } from '../../shared/flash-notice/flash-notice.component';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit,OnDestroy {
  params:any;
  public diff:string =''
  lessthan:any
  user:any
  value:any
  get:any
  constructor(private route:ActivatedRoute,public ps:PharmacyServiceService,private dialog:MatDialog) { }

  ngOnInit() {
    this.get = this.route.params.subscribe(params =>{
      this.params = params['name']
    })
try {
    this.ps.getDrugs().subscribe(
      res=>{
        this.user = res;})
} catch (error) {
  console.log(error);
}
    const worker = new InlineWorker(() => {
      const doBackgroundRun=(res:any)=>{
              this.lessthan = res.filter((e:any):any=>{
                if (e.qtty > 0 && e.qtty <=15) {
                  this.diff = "less than 15"
                  return e.qtty <= 15 
                }else
                if(e.qtty == 0){
                  this.diff = "out of stock"
                  return  e.qtty == 0
                }
              })
              
               // @ts-ignore
              this.postMessage({
                    returnValue: {g:this.lessthan,d:this.diff}
                  });
            }
      // @ts-ignore
      this.onmessage = (evt) => {
        console.log('Calculation started: ' + new Date());
        doBackgroundRun(evt.data.valuer)
      };
    })
    try {
      this.ps.getDrugs().subscribe(
        res=>{
          this.user = res;
          worker.postMessage({valuer:this.user});

        })
  } catch (error) {
    console.log(error);
  }
    
  

    worker.onmessage().subscribe((data) => {
        console.log('Calculation done: ', new Date() + ' ' , data.data);
      // this.value = data.data.primeNumbers;
      
   if(data.data.returnValue.g.length == 0){
    worker.terminate();
    return
  }
  else this.openAlert(data.data.returnValue.g,data.data.returnValue.d)
      worker.terminate();
    });
    
    worker.onerror().subscribe((data) => {
      console.log(data);
    });    
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
