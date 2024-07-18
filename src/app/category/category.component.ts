import { Component, contentChild, OnInit } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { ServicesService } from '../services/services.service';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { CommonModule } from '@angular/common';

interface paramsObj {
  'categoryName' : String;
  'idx' : Number;
}

interface MoreContent {
  title: string;
  year: string;
  duration: string;
  imgLink: string;
  queryParams : paramsObj;
}


interface CategoryContent {
  categoryName: string;
  bannerTitle: string;
  bannerImgURL: string;
  moreContent: MoreContent[];
}

interface ContentObj {
  [key: string]: CategoryContent;
}

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [NavbarComponent, CommonModule],
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent implements OnInit{

  constructor(private commonServiceObj:ServicesService, private routerObj : Router, private activatedRouteObj: ActivatedRoute) {}

  currentCategory = '';

  bannerImgURL = ''
  categoryName = ''
  categoryTitle = ''
  categoryDesc = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'

  currentUser = {
    name : '',
    username : '',
    password : '',
    isSubscribed : false
  }

  watchNow(){
    if(!this.currentUser.isSubscribed){
      this.routerObj.navigate(['/subscribe'])
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


  contentObj : ContentObj = {
    'savanna' : {
        categoryName : 'Savanna',
        bannerTitle : 'The Eye of The Leopard',
        bannerImgURL : '../../assets/eyeOfLeopard.jpeg',

        moreContent : [
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
        ]

    },
    'sea' : {
        categoryName : 'Sea',
        bannerTitle : 'Turtle: The Odyssey',
        bannerImgURL : '../../assets/turtle.jpeg',

        moreContent : [
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
        ]

    },
    'forest' : {
        categoryName : 'Forest',
        bannerTitle : 'The Eye of The Moose',
        bannerImgURL : '../../assets/moose.jpeg',

        moreContent : [
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
        ]

    },
    'jungle' : {
        categoryName : 'Jungle',
        bannerTitle : 'Macaws Brazil Paradise',
        bannerImgURL : '../../assets/macaws.jpeg',

        moreContent : [
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
                imgLink : 'url(../../assets/theKing.jpg)',
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
        ]

    },
    'desert' : {
        categoryName : 'Desert',
        bannerTitle : 'The Camel\'s Journey',
        bannerImgURL : '../../assets/camel.jpeg',

        moreContent : [
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

        ]
    },
    'arctic' : {
        categoryName : 'Arctic',
        bannerTitle : 'The Penguin Dance',
        bannerImgURL : '../../assets/arcticBanner.jpeg',

        moreContent : [
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
  }

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

    this.activatedRouteObj.queryParams.subscribe(res => {
      this.currentCategory = res['category-name'];
    })

    if (this.contentObj[this.currentCategory]) {
      this.categoryName = this.contentObj[this.currentCategory].categoryName;
      this.categoryTitle = this.contentObj[this.currentCategory].bannerTitle;
      this.bannerImgURL = `url(${this.contentObj[this.currentCategory].bannerImgURL})`;

    } else {
      console.error('Category not found');
    }

  }


}
