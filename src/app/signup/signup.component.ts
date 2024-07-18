import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';
import { ServicesService } from '../services/services.service';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
	selector: 'app-signup',
	standalone: true,
	imports: [RouterLink, CommonModule, FormsModule, NavbarComponent],
	templateUrl: './signup.component.html',
	styleUrl: './signup.component.css'
})
export class SignupComponent {

	constructor (private commonServiceObj:ServicesService, private routerObj:Router){}

	name = '';
	email = '';
	password = '';
	confirmPassword = '';

	warningText = ''
	warningViewer = false

	usersDB = [{
		name : '',
		username: "",
		password: "",
		isSubscribed : false
	}]
	onSignUp(){
		if(this.name == '' || this.email == '' || this.password == ''){
			this.warningText = 'Please fill all the fields correctly first';
			this.warningViewer = true;

			// highlight name field
			let nameField = document.getElementById('name');
      if(nameField && this.name == ''){
        nameField.classList.add('alerts-border');

        setTimeout(() => {
            nameField.classList.remove("alerts-border");
        }, 2650);
      }

			// highlight Email field
			const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

			let emailField = document.getElementById('username');
			if(emailField && (this.email == '' || !emailRegex.test(this.email))){
        emailField.classList.add('alerts-border');

        setTimeout(() => {
            emailField.classList.remove("alerts-border");
        }, 2650);
      }

			// highlight Password field
			let passwordField = document.getElementById('password');
			if(passwordField && this.password == '') {
        passwordField.classList.add('alerts-border')

        setTimeout(() => {
            passwordField.classList.remove("alerts-border");
        }, 2650);
      }

			// highlight confirm password field
			let confirmPasswordField = document.getElementById('confirm-password');
			if(confirmPasswordField && this.confirmPassword == '') {
        confirmPasswordField.classList.add("alerts-border")

        setTimeout(() => {
            confirmPasswordField.classList.remove("alerts-border")
        }, 2650);
      }
		}else {

			const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
			if(!emailRegex.test(this.email)){
				this.warningText = "Please Enter Valid Email";
				this.warningViewer = true;

			    // highlight Email field
				let emailField = document.getElementById('username');
				if(emailField) {
            emailField.classList.add("alerts-border")

            setTimeout(() => {
                emailField.classList.remove("alerts-border");
            }, 2650);
        }
			}else {
				if(this.password == this.confirmPassword){

          this.commonServiceObj.usersDB.subscribe(res=>{
            this.usersDB = res;
					})
          const user = this.usersDB.find(user => user.username === this.email);

          if(user){
            this.warningText = "Email Already Exist";
            this.warningViewer = true;

            let emailField = document.getElementById('username');
            if(emailField){
              emailField.classList.add('alerts-border');

              setTimeout(() => {
                  emailField.classList.remove("alerts-border");
              }, 2650);
            }
          }else {
            this.usersDB.push({
              name : this.name,
              username: this.email,
              password: this.password,
              isSubscribed : false
            })

            localStorage.setItem('username', this.email);
            localStorage.setItem('password', this.password);

            this.commonServiceObj.setUsersDB(this.usersDB);
            localStorage.setItem('usersDB', JSON.stringify(this.usersDB));
            this.routerObj.navigate(['/login']);
          }

				}else {
					this.warningText = 'Password and Confirm Password does not match';
					this.warningViewer = true;

					// highlight Password and confirm password field
					let passwordField = document.getElementById('password');
					let confirmPasswordField = document.getElementById('confirm-password');
					if(passwordField && confirmPasswordField && this.password !=this.confirmPassword){
            passwordField.classList.add('alerts-border');
            confirmPasswordField.classList.add("alerts-border");

            setTimeout(() => {
                passwordField.classList.remove("alerts-border");
                confirmPasswordField.classList.remove("alerts-border");
            }, 2650);
					}
				}
			}
		}


	}

	showPasswordIcon = true;
	showConfirmPasswordIcon = true;

	hidePasswordIcon = false;
	hideConfirmPasswordIcon = false;

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

	showConfirmPassword(){
		if(this.showConfirmPasswordIcon){
			this.showConfirmPasswordIcon = false;
			this.hideConfirmPasswordIcon = true;

			let input = document.getElementById('confirm-password');
			if(input){
				input.setAttribute('type', 'text');
			}
		}else {
			this.showConfirmPasswordIcon = true;
			this.hideConfirmPasswordIcon = false;

			let input = document.getElementById('confirm-password');
			if(input){
				input.setAttribute('type', 'password');
			}
		}
	}


}
