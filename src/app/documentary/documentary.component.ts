import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';
import { ServicesService } from '../services/services.service';

interface ContentObj {
  [key: string]: CategoryContent[];
}

interface paramsObj {
  'categoryName' : String;
  'idx' : Number;
}

interface CategoryContent {
  title: string;
  year: string;
  duration: string;
  imgLink: string;
  queryParams : paramsObj;
}

@Component({
  selector: 'app-documentary',
  standalone: true,
  imports: [CommonModule, NavbarComponent],
  templateUrl: './documentary.component.html',
  styleUrl: './documentary.component.css'
})
export class DocumentaryComponent implements OnInit {

  constructor(private activatedRouteObj : ActivatedRoute, private routerObj : Router, private commonServiceObj : ServicesService){}

  documentaryContent : ContentObj = {
    'savanna' : [
      {
          title : 'The Eye of The Leopard',
          year : '2022',
          duration : '1h 30m',
          imgLink : 'url(../../assets/eyeOfLeopard.jpeg)',
          queryParams : {
            categoryName : 'savanna',
            idx : 0
          }

      },
      {
          title : 'The Heart of The Elephant',
          year : '2020',
          duration : '1h 34m',
          imgLink : 'url(../../assets/theHeart.jpg)',
          queryParams : {
            categoryName : 'savanna',
            idx : 1
          }
      },
      {
          title : 'The Return of The White Rhino',
          year : '2021',
          duration : '1h 32m',
          imgLink : 'url(../../assets/theReturn.jpg)',
          queryParams : {
            categoryName : 'savanna',
            idx : 2
          }
      },
      {
          title : "Impalas: The Savanna's Heart",
          year : '2020',
          duration : '1h 34m',
          imgLink : 'url(../../assets/impalas.jpg)',
          queryParams : {
            categoryName : 'savanna',
            idx : 3
          }
      }
    ],
    'sea' : [
      {
          title : "Turtle: The Odyssey",
          year : '2022',
          duration : '1h 20m',
          imgLink : 'url(../../assets/turtle.jpeg)',
          queryParams : {
            categoryName : 'sea',
            idx : 0
          }
      },
      {
          title : "The Amazing World of Dolphins",
          year : '2022',
          duration : '1h 19m',
          imgLink : 'url(../../assets/dolphins.jpg)',
          queryParams : {
            categoryName : 'sea',
            idx : 1
          }
      },
      {
          title : "Stingray: The Sea's Heart",
          year : '2021',
          duration : '1h 39m',
          imgLink : 'url(../../assets/stingray.jpg)',
          queryParams : {
            categoryName : 'sea',
            idx : 2
          }
      },
      {
          title : "The Secret of The Jelly Fish",
          year : '2022',
          duration : '1h 19m',
          imgLink : 'url(../../assets/jellyFish.jpg)',
          queryParams : {
            categoryName : 'sea',
            idx : 3
          }
      }
    ],
    'forest' : [
      {
          title : 'The Eye of The Moose',
          year : '2022',
          duration : '1h 54m',
          imgLink : 'url(../../assets/moose.jpeg)',
          queryParams : {
            categoryName : 'forest',
            idx : 0
          }
      },
      {
          title : 'The Squirrel Dilemma',
          year : '2023',
          duration : '1h 58m',
          imgLink : 'url(../../assets/squirrel.jpg)',
          queryParams : {
            categoryName : 'forest',
            idx : 1
          }
      },
      {
          title : 'Love In The Woods: Documentary',
          year : '2023',
          duration : '1h 32m',
          imgLink : 'url(../../assets/loveInTheWoods.jpg)',
          queryParams : {
            categoryName : 'forest',
            idx : 2
          }
      },
      {
          title : "A World Of Wisdom: Owl's Perspective'",
          year : '2023',
          duration : '1h 39m',
          imgLink : 'url(../../assets/worldOfWisdom.jpeg)',
          queryParams : {
            categoryName : 'forest',
            idx : 3
          }
      }
    ],
    'jungle' : [
      {
          title : 'Macaws Brazil Paradise',
          year : '2022',
          duration : '1h 08m',
          imgLink : 'url(../../assets/macaws.jpeg)',
          queryParams : {
            categoryName : 'jungle',
            idx : 0
          }
      },
      {
          title : 'The King of The Jungle',
          year : '2021',
          duration : '1h 58m',
          imgLink : 'url(../../assets/theKing.jpg)',
          queryParams : {
            categoryName : 'jungle',
            idx : 1
          }
      },
      {
          title : 'Frogs: The Jungle\'s Heart',
          year : '2020',
          duration : '1h 54m',
          imgLink : 'url(../../assets/frogs.jpg)',
          queryParams : {
            categoryName : 'jungle',
            idx : 2
          }
      },
      {
          title : 'Money Kingdom: Jungle',
          year : '2021',
          duration : '1h 22m',
          imgLink : 'url(../../assets/moneyKingdom.jpg)',
          queryParams : {
            categoryName : 'jungle',
            idx : 3
          }
      }
    ],
    'desert' : [
      {
          title : 'The Camel\'s Journey',
          year : '2022',
          duration : '1h 54m',
          imgLink : 'url(../../assets/camel.jpeg)',
          queryParams : {
            categoryName : 'desert',
            idx : 0
          }
      },
      {
          title : 'A Life of Crawling',
          year : '2021',
          duration : '1h 19m',
          imgLink : 'url(../../assets/crawling.jpg)',
          queryParams : {
            categoryName : 'desert',
            idx : 1
          }
      },
      {
          title : 'Wild Desert',
          year : '2020',
          duration : '1h 22m',
          imgLink : 'url(../../assets/wildDesert.jpg)',
          queryParams : {
            categoryName : 'desert',
            idx : 2
          }
      },
      {
          title : 'Meerkats: The Family',
          year : '2021',
          duration : '1h 31m',
          imgLink : 'url(../../assets/meerKats.jpg)',
          queryParams : {
            categoryName : 'desert',
            idx : 3
          }
      }
    ],
    'arctic' : [
      {
          title : 'The Penguin Dance',
          year : '2022',
          duration : '1h 19m',
          imgLink : 'url(../../assets/thePenguinDance.jpg)',
          queryParams : {
            categoryName : 'arctic',
            idx : 0
          }
      },
      {
          title : 'Polar Bear: The King of The Ice',
          year : '2022',
          duration : '1h 22m',
          imgLink : 'url(../../assets/polarBear.jpg)',
          queryParams : {
            categoryName : 'arctic',
            idx : 1
          }
      },
      {
          title : 'Moose Mysteries',
          year : '2021',
          duration : '1h 54m',
          imgLink : 'url(../../assets/mooseMystries.jpg)',
          queryParams : {
            categoryName : 'arctic',
            idx : 2
          }
      },
      {
          title : 'Frozen Planet',
          year : '2022',
          duration : '1h 20m',
          imgLink : 'url(../../assets/frozenPlanet.jpg)',
          queryParams : {
            categoryName : 'arctic',
            idx : 3
          }
      }
    ]

  }

  navigateToDocumentary(data: object){
    const params : NavigationExtras = {
      queryParams : data
    };

    this.routerObj.navigate(['/documentary'], params);

    window.scroll({
      top: 0,
      left: 0,
      // behavior: 'smooth'
    });
  }
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

  currentCategoryName = ''
  currentIdx = 0;
  currentTitle = ''

  currentUser = {
    name : '',
    username : '',
    password : '',
    isSubscribed : false
  }

  watchNow(){
    if(!this.currentUser.isSubscribed){
      this.routerObj.navigate(['/access-denied'])
    }else {
      const overlay = document.getElementById('overlay') as HTMLButtonElement | null;

      if(overlay){
        overlay.style.display = 'flex';
      }
      // body.classList.add('no-scroll');
    }
  }

  watchTrailer(){
    const overlay = document.getElementById('overlay') as HTMLButtonElement | null;

    if(overlay){
      overlay.style.display = 'flex';
    }
    const body = document.body;
    body.classList.add('no-scroll');
  }

  closePlayer(){
    const overlay = document.getElementById('overlay') as HTMLButtonElement | null

    if(overlay) overlay.style.display = 'none';

    const body = document.body;

    body.classList.remove('no-scroll');

    const youtubePlayer = document.getElementById('youtubePlayer') as HTMLIFrameElement | null;
    if (youtubePlayer) {
      youtubePlayer.src = youtubePlayer.src; // Reset the src to stop the video
    }
  }

  play(event:any){
    const overlay = document.getElementById('overlay') as HTMLButtonElement | null
    const body = document.body;
    if(event.target === overlay){
      if(overlay) overlay.style.display = 'none';
      body.classList.remove('no-scroll');
      const youtubePlayer = document.getElementById('youtubePlayer') as HTMLIFrameElement | null;
      if (youtubePlayer) {
        youtubePlayer.src = youtubePlayer.src; // Reset the src to stop the video
      }
    }
  }

  ngOnInit(): void {
    this.activatedRouteObj.queryParams.subscribe(res => {
      this.currentCategoryName = res['categoryName'];
      this.currentIdx = parseInt(res['idx']);
    })

    this.currentTitle = this.documentaryContent[this.currentCategoryName][this.currentIdx].title;

    this.commonServiceObj.currentUser.subscribe(res => {
      this.currentUser = res;
    })

    window.scroll({
      top: 0,
      left: 0,
      // behavior: 'smooth'
    });
  }

}
