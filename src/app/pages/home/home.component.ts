import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent {
  imagesCarousel1: { src: string, alt: string, nameGame: string }[];
  imagesCarousel2: { src: string, alt: string, nameGame: string }[];

  constructor() {
    this.imagesCarousel1 = [
      { src: '../../../assets/1-carousel1.avif', alt: 'Image 1', nameGame: 'Fortnite'},
      { src: '../../../assets/2-carousel1.avif', alt: 'Image 2', nameGame: 'EAS FC 25 (EA Sports Football Club 25)' },
      { src: '../../../assets/3-carousel1.avif', alt: 'Image 3', nameGame: 'EA SPORTS FC™ 24' },
      { src: '../../../assets/4-carousel1.avif', alt: 'Image 4', nameGame: 'Call of Duty®' },
      { src: '../../../assets/5-carousel1.avif', alt: 'Image 5', nameGame: 'eFootball™ 2024' },
      { src: '../../../assets/6-carousel1.webp', alt: 'Image 6', nameGame: 'ELDEN RING' },
      { src: '../../../assets/7-carousel1.avif', alt: 'Image 7', nameGame: 'Grand Theft Auto V (PlayStation®5)' },
      { src: '../../../assets/8-carousel1.webp', alt: 'Image 8', nameGame: 'Hogwarts Legacy' },
      { src: '../../../assets/9-carousel1.avif', alt: 'Image 9', nameGame: `Marvel's Spider-Man 2` },
      { src: '../../../assets/10-carousel1.avif', alt: 'Image 10', nameGame: 'Minecraft' }
    ];

    this.imagesCarousel2 = [
      { src: '../../../assets/1-carousel2.avif', alt: 'Image 1', nameGame: 'VALORANT' },
      { src: '../../../assets/2-carousel2.avif', alt: 'Image 2', nameGame: 'EA SPORTS™ College Football 25' },
      { src: '../../../assets/3-carousel2.avif', alt: 'Image 3', nameGame: 'Asphalt Legends Unite' },
      { src: '../../../assets/4-carousel2.avif', alt: 'Image 4', nameGame: '7 Days to Die - Edição para Console' },
      { src: '../../../assets/5-carousel2.avif', alt: 'Image 5', nameGame: 'F1® Manager 2024' },
      { src: '../../../assets/6-carousel2.avif', alt: 'Image 6', nameGame: 'The Mortuary Assistant' },
      { src: '../../../assets/7-carousel2.avif', alt: 'Image 7', nameGame: 'Nobody Wants to Die' },
      { src: '../../../assets/8-carousel2.avif', alt: 'Image 8', nameGame: 'MARS 2120' },
      { src: '../../../assets/9-carousel2.avif', alt: 'Image 9', nameGame: 'Kunitsu-Gami: Path of the Goddess' },
      { src: '../../../assets/10-carousel2.avif', alt: 'Image 10', nameGame: 'Bloons TD 6' },
      { src: '../../../assets/11-carousel2.avif', alt: 'Image 11', nameGame: 'Flintlock: The Siege of Dawn' },
    ];
  }
}