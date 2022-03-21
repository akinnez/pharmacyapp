import { Component, OnInit,forwardRef,Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  
   // registering this component into angular form api 

   providers:[
    {
      provide:NG_VALUE_ACCESSOR,
    useExisting: forwardRef(()=> InputComponent),
    multi:true
  }
  ]
})
export class InputComponent implements OnInit,ControlValueAccessor {
 // passing props
 @Input() inputType:string = '';
 @Input() label:string = '';
 @Input() type:string = '';
 @Input() selectlist = [];


constructor() { }
// steps for using the registered component

public value: string = ''
public onChange = (_:any):void => {}
public onTouched = () =>{}
public writeValue(value: any): void {
this.value = value;
}
public registerOnChange(fn: any): void {
this.onChange = fn
}
public registerOnTouched(fn: any): void {
this.onTouched = fn
}
//  end of steps

  ngOnInit(): void {
  }

}
