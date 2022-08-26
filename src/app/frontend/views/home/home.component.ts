import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit,OnDestroy {
params:any;
private get:any
  constructor(private route:ActivatedRoute) { }

  ngOnInit() {
    this.get = this.route.params.subscribe(params =>{
      this.params = params['name']
    })
  }
  ngOnDestroy() {
    this.get.unsubscribe()
  }

}
