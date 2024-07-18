import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { ServicesService } from './services/services.service';

declare var AOS:any;

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  constructor(private serviceObj: ServicesService){}
  title = '01_Streamify';

  usersDB = [{}]

  ngOnInit(): void {
    AOS.init();

    const newDB = localStorage.getItem('usersDB');

    if (newDB) {
        const parsedDB = JSON.parse(newDB); // Parse the JSON string back into an array
        this.serviceObj.setUsersDB(parsedDB);
    } else {
        this.serviceObj.usersDB.subscribe(res => {
            this.usersDB = res;
        });

        localStorage.setItem('usersDB', JSON.stringify(this.usersDB)); // Convert the array to a JSON string
    }

  }

}
