import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/userService/user.service';

@Component({
  selector: 'app-user-details-page',
  templateUrl: './user-details-page.component.html',
  styleUrls: ['./user-details-page.component.scss']
})
export class UserDetailsPageComponent implements OnInit {

  constructor(public user:UserService) { }

  ngOnInit(){
    
  }

}
