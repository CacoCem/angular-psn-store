import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent {
  imagesCarousel1: { src: string, alt: string, nameGame: string, link: string }[];
  imagesCarousel2: { src: string, alt: string, nameGame: string, link: string }[];

  constructor() {
    this.imagesCarousel1 = [
      { src: '../../../assets/1-carousel1.avif', alt: 'Image 1', nameGame: 'Fortnite',
        link: 'https://store.playstation.com/pt-br/concept/228748'
      },
      { src: '../../../assets/2-carousel1.avif', alt: 'Image 2', nameGame: 'EAS FC 25 (EA Sports Football Club 25)' ,
        link: 'https://store.playstation.com/pt-br/concept/10009762'
      },
      { src: '../../../assets/3-carousel1.avif', alt: 'Image 3', nameGame: 'EA SPORTS FC™ 24' ,
        link: 'https://store.playstation.com/pt-br/concept/10007176'
      },
      { src: '../../../assets/4-carousel1.avif', alt: 'Image 4', nameGame: 'Call of Duty®' ,
        link: 'https://store.playstation.com/pt-br/concept/10001130'
      },
      { src: '../../../assets/5-carousel1.avif', alt: 'Image 5', nameGame: 'eFootball™ 2024' ,
        link: 'https://store.playstation.com/pt-br/concept/10002427'
      },
      { src: '../../../assets/6-carousel1.webp', alt: 'Image 6', nameGame: 'ELDEN RING' ,
        link: 'https://store.playstation.com/pt-br/concept/10000333'
      },
      { src: '../../../assets/7-carousel1.avif', alt: 'Image 7', nameGame: 'Grand Theft Auto V (PlayStation®5)' ,
        link: 'https://store.playstation.com/pt-br/concept/201930'
      },
      { src: '../../../assets/8-carousel1.webp', alt: 'Image 8', nameGame: 'Hogwarts Legacy' ,
        link: 'https://store.playstation.com/pt-br/concept/232447'
      },
      { src: '../../../assets/9-carousel1.avif', alt: 'Image 9', nameGame: `Marvel's Spider-Man 2` ,
        link: 'https://store.playstation.com/pt-br/concept/10002456'
      },
      { src: '../../../assets/10-carousel1.avif', alt: 'Image 10', nameGame: 'Minecraft' ,
        link: 'https://store.playstation.com/pt-br/concept/212779'
      }
    ];

    this.imagesCarousel2 = [
      { src: '../../../assets/1-carousel2.avif', alt: 'Image 1', nameGame: 'VALORANT' ,
        link: 'https://store.playstation.com/pt-br/concept/10010048'
      },
      { src: '../../../assets/2-carousel2.avif', alt: 'Image 2', nameGame: 'EA SPORTS™ College Football 25' ,
        link: 'https://store.playstation.com/pt-br/concept/10003151'
      },
      { src: '../../../assets/3-carousel2.avif', alt: 'Image 3', nameGame: 'Asphalt Legends Unite' ,
        link: 'https://store.playstation.com/pt-br/concept/10008740'
      },
      { src: '../../../assets/4-carousel2.avif', alt: 'Image 4', nameGame: '7 Days to Die - Edição para Console' ,
        link: 'https://store.playstation.com/pt-br/concept/10008451'
      },
      { src: '../../../assets/5-carousel2.avif', alt: 'Image 5', nameGame: 'F1® Manager 2024' ,
        link: 'https://store.playstation.com/pt-br/concept/10010493'
      },
      { src: '../../../assets/6-carousel2.avif', alt: 'Image 6', nameGame: 'The Mortuary Assistant' ,
        link: 'https://store.playstation.com/pt-br/concept/10006285'
      },
      { src: '../../../assets/7-carousel2.avif', alt: 'Image 7', nameGame: 'Nobody Wants to Die' ,
        link: 'https://store.playstation.com/pt-br/concept/10003635'
      },
      { src: '../../../assets/8-carousel2.avif', alt: 'Image 8', nameGame: 'MARS 2120' ,
        link: 'https://store.playstation.com/pt-br/concept/10001260'
      },
      { src: '../../../assets/9-carousel2.avif', alt: 'Image 9', nameGame: 'Kunitsu-Gami: Path of the Goddess' ,
        link: 'https://store.playstation.com/pt-br/concept/10008719'
      },
      { src: '../../../assets/10-carousel2.avif', alt: 'Image 10', nameGame: 'Bloons TD 6' ,
        link: 'https://store.playstation.com/pt-br/concept/10000502'
      },
      { src: '../../../assets/11-carousel2.avif', alt: 'Image 11', nameGame: 'Flintlock: The Siege of Dawn' ,
        link: 'https://store.playstation.com/pt-br/concept/10004425'
      },
    ];
  }
}