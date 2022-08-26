import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss']
})
export class TransactionsComponent implements OnInit {
  params:string | any;
  constructor() { 
    this.params = sessionStorage.getItem('params')
  }

  ngOnInit(): void {
  }

}
