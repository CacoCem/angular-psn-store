import { Component, HostListener, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css']
})
export class MenuBarComponent implements OnInit {
  items: MenuItem[] = []; // Itens do menu
  lastScrollTop = 0; // Última posição de rolagem
  headerHeight = 50; // Altura do cabeçalho

  ngOnInit(): void {
    this.items = [
      { label: 'Jogos' },
      { label: 'PS5' },
      { label: 'PS4' },
      { label: 'Serviços' },
      { label: 'Acessórios' },
      { label: 'Notícias' },
      { label: 'Loja' },
      { label: 'Suporte' }
    ];
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event): void {
    const currentScrollTop = window.scrollY;
    const header = document.querySelector('.header__menu-bar') as HTMLElement;
    const tertiary = document.querySelector('.section__tertiary-container') as HTMLElement;

    // Verifica se está rolando para baixo ou para cima
    if (currentScrollTop > this.lastScrollTop) {
      // Rolagem para baixo
      tertiary?.classList.add('fixed');
      header?.classList.remove('fixed');
    } else {
      // Rolagem para cima
      tertiary?.classList.remove('fixed');
      if (currentScrollTop > this.headerHeight) {
        header?.classList.add('fixed');
      }
    }
  }
}
