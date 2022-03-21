import { Component, OnInit } from '@angular/core';
import { ISummary } from '../../interface/admin.interface';
import {SummaryService } from '../../services/summaryService/summary.service';


@Component({
  selector: 'summary',
  template: 
  `
  <div class="container">
                    <div class="card my-3 py-3" *ngFor="let items of listSummary">
                        <div class='text-center'>
                            <h3>{{items.info}}</h3>
                        </div>
                        <div class="text-center">
                            <h4>{{items.value}}</h4>
                        </div>
                    </div>
                </div>
  `
})

export class SummaryComponent implements OnInit {
listSummary:ISummary[]=[]
  constructor(public summary:SummaryService) { 
    this.listSummary = this.summary.summary()
  }

  ngOnInit(): void {
  }

}
