import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'card',
  template: `
  <div class="container-fluid w-100 m-0 p-0">
        <div class="card shadow border-0" [style.height.px]='maxheight'>
            <div class="carddeco"></div>
                <ng-content></ng-content>
        </div>
  </div>

  `,
   styles: [
    `
   div.card{
     max-height:100%;
     border-radius:10px;
   } 
    `
//     `
//     div.carddeco::before{
//       content: '';
//       position: absolute;
//       top:0;
//       width: 50%;
//       height: 100px;
//       border-radius:0 0 100% ;
//   }
//   div.carddeco::after{
//       content: '';
//       position: absolute;
//       bottom:0;
//       right: 0;
//       width: 50%;
//       height: 100px;
//       // transform: rotate(90deg);
//       border-radius: 100% 0 0 ;
//   }
//   `
],
})
export class CardComponent implements OnInit {
@Input() title: string = '';
@Input() value: number = 0;
@Input() maxheight: string = '';
  constructor() { }

  ngOnInit(): void {
  }
}
