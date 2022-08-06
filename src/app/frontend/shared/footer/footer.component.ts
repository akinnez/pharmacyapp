import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit{
  @Input() section: string = 'landing';
  @Input() params: string = '';
 
  constructor() { }

  ngOnInit() {
    console.log(this.params);
    
  }
}
