import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router, RouterLink } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { ServicesService } from '../services/services.service';
import { FaqComponent } from '../faq/faq.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, NavbarComponent, CommonModule, FaqComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  constructor(private commonServiceObj: ServicesService, private routerObj: Router){}
  subscribeTxt = 'Subscribe today!'

  currentUser = {
    name : '',
    username : '',
    password : '',
    isSubscribed : false
  }

  delay = '1500';

  navigateToCategory(categoryName : string){
    this.routerObj.navigate(['/category'],
      {queryParams : {'category-name' : categoryName}}
    )
  }



  categories = [
    {
      categoryName : 'savanna',
      imgLink : '../../assets/savanna.jpg',
      style : 'bottom : -150px',
      delay : '0'
    },
    {
      categoryName : 'sea',
      imgLink : '../../assets/sea.jpg',
      style : 'bottom : -150px',
      delay : '200'
    },
    {
      categoryName : 'forest',
      imgLink : '../../assets/forest.jpg',
      style : 'bottom : -150px',
      delay : '400'
    },
    {
      categoryName : 'jungle',
      imgLink : '../../assets/jungle.jpg',
      style : 'bottom : -150px',
      delay : '0'
    },
    {
      categoryName : 'desert',
      imgLink : '../../assets/desert.jpg',
      style : 'bottom : -200px',
      delay : '200'
    },
    {
      categoryName : 'arctic',
      imgLink : '../../assets/artic.jpg',
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
      title : "The Heart of The Elephant",
      imgLink : "url(../../assets/theHeart.jpg)",
      year : "2020",
      duration : '1h 54m',
      delay: '400',
      queryParams : {
        categoryName : 'savanna',
        idx : 1
      }
    },
    {
      title : "The Return of the White Rhino",
      imgLink : "url(../../assets/theReturn.jpg)",
      year : "2021",
      duration : '1h 32m',
      delay: '0',
      queryParams : {
        categoryName : 'savanna',
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

  latestDocumentaries = [
    {
      title : 'Love In The Woods: Documentary',
      imgLink : "url(../../assets/loveInTheWoods.jpg)",
      year : "2023",
      duration : '1h 32m',
      delay: '0',
      queryParams : {
        categoryName : 'forest',
        idx : 2
      }
    },
    {
      title : "The Return of the White Rhino",
      imgLink : "url(../../assets/theReturn.jpg)",
      year : "2021",
      duration : '1h 32m',
      delay: '200',
      queryParams : {
        categoryName : 'savanna',
        idx : 2
      }
    },
    {
      title : 'The King of The Jungle',
      imgLink : "url(../../assets/theKing.jpg)",
      year : "2021",
      duration : '1h 58m',
      delay: '400',
      queryParams : {
        categoryName : 'jungle',
        idx : 1
      }
    },
    {
      title : "The Squirrel Dilemma",
      imgLink : "url(../../assets/squirrel.jpg)",
      year : "2023",
      duration : '1h 58m',
      delay: '0',
      queryParams : {
        categoryName : 'forest',
        idx : 1
      }
    },
    {
      title : "The Heart of The Elephant",
      imgLink : "url(../../assets/theHeart.jpg)",
      year : "2020",
      duration : '1h 54m',
      delay: '200',
      queryParams : {
        categoryName : 'savanna',
        idx : 1
      }
    },

    {
      title : "Polar Bear: The King of Ice",
      imgLink : "url(../../assets/polarBear.jpg)",
      year : "2022",
      duration : '1h 22m',
      delay: '400',
      queryParams : {
        categoryName : 'arctic',
        idx : 1
      }
    }
  ]

  navigateToDocumentary(data: object){
    const params : NavigationExtras = {
      queryParams : data
    };

    this.routerObj.navigate(['/documentary'], params);
    
  }
  ngOnInit(): void {
    this.commonServiceObj.currentUser.subscribe(res => {
      this.currentUser = res;
    })

    if(this.currentUser.isSubscribed) this.subscribeTxt = 'Enjoy Watching!'
  }

}
