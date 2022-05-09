import { Component, OnInit,Input,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input() text:string = '';
  @Input() buttonSection:string = '';
  @Input() mclass:string = '';
  @Output() mclick:EventEmitter<any>= new EventEmitter
  constructor() { }

  ngOnInit(): void {
    
  }
  event(){
    this.mclick.emit()
  }

}
