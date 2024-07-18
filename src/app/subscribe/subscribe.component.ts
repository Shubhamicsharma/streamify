import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services/services.service';
import { Router } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-subscribe',
  standalone: true,
  imports: [NavbarComponent, CommonModule],
  templateUrl: './subscribe.component.html',
  styleUrl: './subscribe.component.css'
})
export class SubscribeComponent implements OnInit {
  constructor(private commonServiceObj: ServicesService, private routerObj : Router) {}

  isSubscribed = false;

  currentUser = {
    name : '',
    username : '',
    password : '',
    isSubscribed : false
  }

  usersDB = [{
    name : '',
    username : '',
    password : '',
    isSubscribed : false
  }]

  updateSubscriptionStatus(username: string, password: string, newStatus: boolean) {
    this.commonServiceObj.usersDB.subscribe(res => {
      this.usersDB = res;
    })

    const index = this.usersDB.findIndex(user => user.username == username);
    this.usersDB[index].isSubscribed = newStatus;
  }
  onSubscribe(){
    this.commonServiceObj.currentUser.subscribe(res => {
      this.currentUser = res;
    })

    if(this.currentUser.name != ''){
      this.updateSubscriptionStatus(this.currentUser.username, this.currentUser.password, true);

      this.currentUser.isSubscribed = true;
      this.commonServiceObj.setCurrentUser(this.currentUser);
      this.commonServiceObj.setUsersDB(this.usersDB);

      localStorage.setItem('usersDB', JSON.stringify(this.usersDB));

      this.routerObj.navigate(['/home'])
    }else {
      this.routerObj.navigate(['/login'])
    }
  }

  ngOnInit(): void {
      this.commonServiceObj.currentUser.subscribe(res => {
        this.currentUser = res;
      })

      this.isSubscribed = this.currentUser.isSubscribed
  }
}
