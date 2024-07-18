import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ServicesService implements OnInit {

  constructor() { }

  usersDB = new BehaviorSubject([
    {
      name : 'Shubham Sharma',
      username : 'shubham@gmail.com',
      password : '123456',
      isSubscribed : true
    },
    {
      name : "Random User",
      username : "random@gmail.com",
      password : "123456",
      isSubscribed : false
    }
  ])

  currentUser = new BehaviorSubject({
    name : '',
    username : '',
    password : '',
    isSubscribed : false
  })

  setUsersDB(newUsersDB : any){
    this.usersDB.next(newUsersDB);
  }

  setCurrentUser(newCurrentUser : any){
    this.currentUser.next(newCurrentUser);
  }

  ngOnInit(): void {
      console.log('Service is working');
  }
}

