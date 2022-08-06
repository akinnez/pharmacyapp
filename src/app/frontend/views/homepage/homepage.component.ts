import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit,OnDestroy {
  params:any;
  private get:any
    constructor(private route:ActivatedRoute) { }
  
    ngOnInit() {
      this.get = this.route.params.subscribe(params =>{
        this.params = params['name']
      })
      console.log(this.params);
      
    }
    ngOnDestroy() {
      this.get.unsubscribe()
    }
  

}
