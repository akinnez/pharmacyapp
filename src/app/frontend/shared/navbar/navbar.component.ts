import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/admin/services/userService/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  @Input() section:string = '';
  @Input() params:string = '';
  user:any;
  name:string = '';
  public val:any;

  constructor(private users:UserService,public route:Router) {}

  ngOnInit() {
    if (this.section == 'landing') {
      this.route.navigate(['/'])
      return
    }
    else{
      this.user = this.users.users.find((e)=>{
        return e.name == this.params
       })
       if (this.user === undefined ){
        this.val = 'd-none'
          this.route.navigate(['user/notfound'])
          return
       }
      this.name = this.user.name
       }
      }
    }

