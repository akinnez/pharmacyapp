import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
params:any;
  constructor(private route:ActivatedRoute) { 
    this.route.params.subscribe(params =>{
      this.params = params['name']
    })
    console.log(this.params);
    
  }

  ngOnInit(): void {
  }

}
