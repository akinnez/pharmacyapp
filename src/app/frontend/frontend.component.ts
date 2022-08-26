import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-frontend',
  template: `<router-outlet></router-outlet>`,
  styleUrls: ['./frontend.scss']
})
export class FrontendComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
