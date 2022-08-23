import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/admin/services/userService/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit,OnDestroy {
  @Input() section:string = '';
  @Input() params:string = '';
  user:any;
  name:string = '';
  destroy:any;
  public val:any;

  constructor(private users:UserService,public route:Router) {}

  ngOnInit() {
    if (this.section == 'landing') {
      this.route.navigate(['/'])
      return
    }
    else{
    this.destroy =  this.users.getData().subscribe(
        res =>{    
          this.user = res.find((e:any)=>{
            return e.fullname == this.params
           })
           if (this.user === undefined ){
            this.val = 'd-none'
              this.route.navigate(['/**'])
              return
           }
            this.name = this.user.fullname
           },
        err =>{ this.route.navigate(['/**'])}
         )
     
          }
      }
    ngOnDestroy() {
      this.destroy.unsubscribe()
    }
    }

