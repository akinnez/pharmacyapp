import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-inventory-start',
  template:`
  <div class="">
    <div class="d-flex justify-content-center align-items-center" style="height: 50vh;">
        <div class="py-5 border border-2 border-warning" style="border-style:dotted !important;">
            <div class="w-75 mx-auto">
                <span>Click Below to start new transaction</span>
                <a class="nav-link" routerLink="inventory">
                    <app-button buttonSection="frontend" text="New Sales" mclass="mt-5"></app-button>
                </a>
            </div>
        </div>
    </div>
</div>

  `
})
export class InventoryStartComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
