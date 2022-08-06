import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {
@Input() section:string = 'landing'
@Input() params:string = ''
  constructor() { }

  ngOnInit(): void {
  }

}
