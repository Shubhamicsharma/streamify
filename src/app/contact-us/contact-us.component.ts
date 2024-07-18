import { Component } from '@angular/core';
import { ServicesService } from '../services/services.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from '../navbar/navbar.component';
import { FaqComponent } from "../faq/faq.component";

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [NavbarComponent, CommonModule, FormsModule, FaqComponent],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.css'
})
export class ContactUsComponent {

  constructor(private commonServiceObj : ServicesService){}

  currentUser = {
    name : '',
    username : '',
    password : '',
    isSubscribed : false
  }

  name =''
  phoneNumber = ''
  email = ''
  subject = ''
  message = ''

  ngOnInit(): void {
    this.commonServiceObj.currentUser.subscribe(res => {
      this.currentUser = res;
    })

    this.name = this.currentUser.name;
    this.email = this.currentUser.username
  }

}
