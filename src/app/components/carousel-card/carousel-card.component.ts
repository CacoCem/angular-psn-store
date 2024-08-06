import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-carousel-card',
  templateUrl: './carousel-card.component.html',
  styleUrl: './carousel-card.component.css'
})
export class CarouselCardComponent {
  @Input()
  titleGame = ""

  @Input()
  gameImgSrc = ""

}
