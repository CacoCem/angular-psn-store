import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrl: './menu-bar.component.css'
})
export class MenuBarComponent {
  items: MenuItem[] = [];

  ngOnInit() {
    this.items = [
      { label: 'Jogos'},
      { label: 'PS5'},
      { label: 'PS4'},
      { label: 'Serviços'},
      { label: 'Acessórios'},
      { label: 'Notícias'},
      { label: 'Loja'},
      { label: 'Suporte'}
    ];
  }
}