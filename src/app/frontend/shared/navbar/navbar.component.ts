import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/admin/services/userService/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  @Input() section:string = '';
  @Input() params:string = '';
  name:string = '';
  constructor(private user:UserService) { 
  }

  ngOnInit(): void {
    console.log(this.user.users);
    
    
  }
}
