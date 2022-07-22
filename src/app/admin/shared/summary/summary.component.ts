import { Component, OnInit } from '@angular/core';
import { ISummary } from '../../interface/admin.interface';
import { SummaryService } from '../../services/summaryService/summary.service';

@Component({
  selector: 'summary',
  template: `
    <div class="container">
      <div class="my-3" *ngFor="let items of listSummary">
        <card>
          <div class="text-center mt-3">
            <h3>{{ items.info }}</h3>
          </div>
          <div class="text-center mb-3">
            <h4>{{ items.value }}</h4>
          </div>
        </card>
      </div>
    </div>
  `,
})
export class SummaryComponent implements OnInit {
  listSummary: ISummary[] = [];
  constructor(public summary: SummaryService) {
    this.listSummary = this.summary.summary();
  }

  ngOnInit(): void {}
}
