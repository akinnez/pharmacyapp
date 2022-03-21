import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'card-content',
  template: `
  <div *ngIf="cardTitle=='insight'">
    <card>
        <div class="my-3">
            <h3 class="text-center">
            {{title}}
            </h3>
            <div class="text-center mt-3">
                <h1 *ngIf="title !=='Total Sales'" >
                     {{value}}
                </h1>
                <h1 *ngIf="title =='Total Sales'" >
                     {{value}}<span style="font-size:18px">NGN</span>
                </h1>
            </div>
        </div>
    </card>
</div>

<div *ngIf="cardTitle=='report'">
    <chart title="{{title}}"></chart>
</div>
  `
})

export class CardcontentComponent implements OnInit {
  @Input() title: string = '';
  @Input() value: string = '';
  @Input() cardTitle: string = '';
  constructor() { }

  ngOnInit(): void {
  }

}
