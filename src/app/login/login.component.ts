import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { ServicesService } from '../services/services.service';
import { Router } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [NavbarComponent, RouterLink, FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  // Angular Local Services Object and Router Object
  constructor(private commonServicesObj : ServicesService, private routerObj:Router){}

  username = '';
  password = '';
  warningText = '';

  warningViewer = false;

  usersDB = [{
    name : '',
    username: "",
    password: "",
    isSubscribed : false
  }]


  authenticateUser(username : string, password : string){
    return this.usersDB.find(user => user.username === username && user.password === password);
  }

  onLogin(){
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if(this.username == '' || this.password == '' || !emailRegex.test(this.username)){
      if(this.username == '' && this.password == ''){
        this.warningViewer = true;
        this.warningText = 'Please enter your username and password';

        let usernameField = document.getElementById('username')
        let passwordField = document.getElementById("password")

        if(usernameField && passwordField){
          usernameField.classList.add('alerts-border')
          passwordField.classList.add("alerts-border")

          setTimeout(() => {
            usernameField.classList.remove('alerts-border')
            passwordField.classList.remove("alerts-border")
          }, 3000);
        }

      }else if (this.username == '' || !emailRegex.test(this.username)){
        this.warningViewer = true;
        this.warningText = 'Please enter valid username';

        let usernameField = document.getElementById('username')

        if(usernameField ){
          usernameField.classList.add('alerts-border')

          setTimeout(() => {
            usernameField.classList.remove('alerts-border')
          }, 3000);
        }

      }else if(this.password == ''){
        this.warningViewer = true;
        this.warningText = 'Please enter your password';

        let passwordField = document.getElementById("password")
        if(passwordField){
          passwordField.classList.add("alerts-border")

          setTimeout(() => {
            passwordField.classList.remove("alerts-border")
          }, 3000);
        }
      }
    }else {
      this.commonServicesObj.usersDB.subscribe(res => {
        this.usersDB = res;
      })

      const user = this.authenticateUser(this.username, this.password)
      if(user){
        this.warningViewer = false;
        this.routerObj.navigate(['/home']);

        this.commonServicesObj.setCurrentUser(user)
      }else {
        this.warningViewer = true;
        this.warningText = 'Invalid username or password';

        let usernameField = document.getElementById('username')
        let passwordField = document.getElementById("password")

        if(usernameField && passwordField){
          usernameField.classList.add('alerts-border')
          passwordField.classList.add("alerts-border")

          setTimeout(() => {
            usernameField.classList.remove('alerts-border')
            passwordField.classList.remove("alerts-border")
          }, 3000);
        }
      }


    }
  }

  onRememberMe(event:any){
    if(event.target.checked){
      localStorage.setItem('username', this.username);
      localStorage.setItem('password', this.password);
    }else {
      localStorage.removeItem('username');
      localStorage.removeItem("password");
    }
  }

  showPasswordIcon = true;
  hidePasswordIcon = false;

  showPassword(){
    if(this.showPasswordIcon){
      this.showPasswordIcon = false;
      this.hidePasswordIcon = true;

      let input = document.getElementById('password');
      if(input){
        input.setAttribute('type', 'text');
      }
    }else {
      this.showPasswordIcon = true;
      this.hidePasswordIcon = false;

      let input = document.getElementById('password');
      if(input){
        input.setAttribute('type', 'password');
      }
    }

  }

  ngOnInit(): void {
    this.username = localStorage.getItem('username') || '';
    this.password = localStorage.getItem("password") || '';

    if(localStorage.getItem("password")){
      let input = document.getElementById('cbx-46') as HTMLInputElement;
      if(input){
        input.checked = true;
      }
    }
  }

}
