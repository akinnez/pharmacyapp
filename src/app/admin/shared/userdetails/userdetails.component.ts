import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.scss']
})
export class UserdetailsComponent implements OnInit {
 @Input() name: string = '';
 @Input() email:string='';
 @Input() age:string='';
 @Input() username:string='';
 @Input() id:string='';
 show:boolean = false;
 info:string='';

 userInfo = [{}]


  constructor() { }



  ngOnInit(): void {
  }
 checkUser(){
   this.show = !this.show
 }

}
