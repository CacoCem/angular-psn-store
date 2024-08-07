import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { MenubarModule } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';
import { GridCardComponent } from './components/grid-card/grid-card.component';
import { CarouselModule } from 'primeng/carousel';
import { FooterComponent } from './components/footer/footer.component';
import { BigCardGridComponent } from './components/big-card-grid/big-card-grid.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuBarComponent,
    GridCardComponent,
    FooterComponent,
    BigCardGridComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MenubarModule,
    ButtonModule,
    IconFieldModule,
    InputIconModule,
    InputTextModule,
    CarouselModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
