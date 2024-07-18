import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { ServicesService } from '../services/services.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

declare var bootstrap:any;

@Component({
  selector: 'app-user-account',
  standalone: true,
  imports: [NavbarComponent, FormsModule, CommonModule, RouterLink],
  templateUrl: './user-account.component.html',
  styleUrl: './user-account.component.css'
})
export class UserAccountComponent implements OnInit {

  constructor(private commonServiceObj : ServicesService){}

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



  updateNameHelper(username: string, newName: string) {
    this.commonServiceObj.usersDB.subscribe(res => {
      this.usersDB = res;
    })

    const index = this.usersDB.findIndex(user => user.username == username);
    this.usersDB[index].name = newName;
  }

  updateName(){
    this.commonServiceObj.setCurrentUser(this.currentUser);
    this.updateNameHelper(this.currentUser.username, this.currentUser.name);

    this.commonServiceObj.setUsersDB(this.usersDB);
    localStorage.setItem('usersDB', JSON.stringify(this.usersDB));

    const modalElement = document.getElementById('confirmSave');
    const modal = new bootstrap.Modal(modalElement!);
    modal.show();
  }
  ngOnInit(): void {
    this.commonServiceObj.currentUser.subscribe(res => {
      this.currentUser = res;
    })
  }

}
