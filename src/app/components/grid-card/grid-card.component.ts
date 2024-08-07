import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-grid-card',
  templateUrl: './grid-card.component.html',
  styleUrl: './grid-card.component.css'
})
export class GridCardComponent {
  @Input()
  bigcardcover:string = ""

  @Input()
  gameLink:string = ""
}
