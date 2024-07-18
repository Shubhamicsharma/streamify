import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { NavigationExtras, Router, RouterLink } from '@angular/router';
import { ServicesService } from '../services/services.service';
declare var bootstrap: any;

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit, AfterViewInit {

  constructor(private commonServiceObj : ServicesService, private routerObj:Router){}

  loginViewer = true;
  logoutViewer = false;

  subscribeBtnViewer = true;
  premiumUser = false

  currentUser = {
    name : '',
    username : '',
    password : '',
    isSubscribed : false
  }

  navigateToCategory(categoryName : string){
    this.routerObj.navigate(['/category'],
      {queryParams : {'category-name' : categoryName}}
    )
  }

  navigateToDocumentary(data: object){
    const params : NavigationExtras = {
      queryParams : data
    };

    this.routerObj.navigate(['/documentary'], params);
  }

  onLogout(){
    const modalElement = document.getElementById('confirmLogout');
    const modal = new bootstrap.Modal(modalElement!);
    modal.show();

  }


  onConfirmLogout(){
    // this.routerObj.navigate(['/home'])
    // window.location.reload();
    window.location.href = '/home';

  }

  viewBenefits(){
    let tooltip = document.querySelector('div.tooltip-inner') as HTMLDivElement;
    if(tooltip) tooltip.remove();
    this.routerObj.navigate(["/subscribe"]);
  }

  categories = [
    {
      categoryName : 'savanna',
      imgLink : 'url(../../assets/savanna.jpg)',
      style : 'bottom : -150px',
      delay : '0'
    },
    {
      categoryName : 'sea',
      imgLink : 'url(../../assets/sea.jpg)',
      style : 'bottom : -150px',
      delay : '200'
    },
    {
      categoryName : 'forest',
      imgLink : 'url(../../assets/forest.jpg)',
      style : 'bottom : -150px',
      delay : '400'
    },
    {
      categoryName : 'jungle',
      imgLink : 'url(../../assets/jungle.jpg)',
      style : 'bottom : -150px',
      delay : '0'
    },
    {
      categoryName : 'desert',
      imgLink : 'url(../../assets/desert.jpg)',
      style : 'bottom : -200px',
      delay : '200'
    },
    {
      categoryName : 'arctic',
      imgLink : 'url(../../assets/artic.jpg)',
      style : 'bottom : -150px',
      delay : '400'
    }
  ]

  popularDocumentaries = [
    {
      title : 'The King of The Jungle',
      imgLink : "url(../../assets/theKing.jpg)",
      year : "2021",
      duration : '1h 58m',
      delay: '0',
      queryParams : {
        'categoryName' : 'jungle',
        'idx' : 1
      }
    },
    {
      title : "Frogs: The Jungle's Heart",
      imgLink : "url(../../assets/frogs.jpg)",
      year : "2020",
      duration : '1h 54m',
      delay: '200',
      queryParams : {
        categoryName : 'jungle',
        idx : 2
      }
    },
    {
      title : "Stingray: The Sea's Heart",
      imgLink : "url(../../assets/stingray.jpg)",
      year : "2021",
      duration : '1h 39m',
      delay: '200',
      queryParams : {
        categoryName : 'sea',
        idx : 2
      }
    },
    {
      title : "The Squirrel Dilemma",
      imgLink : "url(../../assets/squirrel.jpg)",
      year : "2023",
      duration : '1h 58m',
      delay: '400',
      queryParams : {
        categoryName : 'forest',
        idx : 1
      }
    }
  ]

  ngAfterViewInit(): void {
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-toggle="tooltip"]'));
    tooltipTriggerList.forEach(tooltipTriggerEl => {
      new bootstrap.Tooltip(tooltipTriggerEl);
    });
  }
  ngOnInit(): void {
    this.commonServiceObj.currentUser.subscribe(res => {
      this.currentUser = res;
    })

    if(this.currentUser.name != ''){
      console.log('first')
      this.loginViewer = false;
      this.logoutViewer = true;
    }

    if(this.currentUser.isSubscribed){
      this.subscribeBtnViewer = false;
      this.premiumUser = true;
    }
  }
}
