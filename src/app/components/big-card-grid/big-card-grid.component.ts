import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-big-card-grid',
  templateUrl: './big-card-grid.component.html',
  styleUrl: './big-card-grid.component.css'
})
export class BigCardGridComponent {
  @Input()
  imgSrc:string=""
}
