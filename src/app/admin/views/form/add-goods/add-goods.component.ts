import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SupermarketService } from 'src/app/admin/services/supermarket/supermarket.service';

@Component({
  selector: 'add-goods-form',
  templateUrl: './add-goods.component.html',
  styleUrls: ['./add-goods.component.scss']
})
export class AddGoodsFormComponent implements OnInit,OnDestroy {
  form:FormGroup;
  destroy:any;
  constructor(private fb:FormBuilder, public ss: SupermarketService) { 
    this.form = this.fb.group({
      name:['',Validators.required],
      companyName:['',Validators.required],
      itemCode:['',Validators.required],
      qtty:[0, Validators.required],
      price:[0,Validators.required],
      size:['',Validators.required],
      mfd:['',Validators.required],
      exp:['', Validators.required],
    })
  }

  ngOnInit(): void {}
navigate(){
    try {
    this.destroy =  this.ss.postGoods(this.form.value).subscribe(
        res=>{
          console.log(res);
        }
      )
    } catch (error) {
      console.log(error);
    }
    setTimeout(()=> location.reload())
}

ngOnDestroy(): void {
  this.destroy.unsubscribe()
}

}
