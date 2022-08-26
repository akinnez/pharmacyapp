import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inventory-sales',
  templateUrl: './inventory-sales.component.html',
  styleUrls: ['./inventory-sales.component.scss']
})
export class InventorySalesComponent implements OnInit {
  block:string = "d-block"
  notblock:string = ""
  constructor(public route:Router) { }

  ngOnInit(): void {
  }
  dis(){
    this.block = 'd-none'
    this.route.navigate([location.pathname +'/inventory'])
  }

}
