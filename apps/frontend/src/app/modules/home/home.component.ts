import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselComponent } from './carousel/carousel.component';
import { CarouselForyouComponent } from './carousel-foryou/carousel-foryou.component';
import { CarouselCategoryComponent } from './carousel-category/carousel-category.component';
import { CarouselNewsComponent } from './carousel-news/carousel-news.component';
import { CarouselBottomComponent } from './carousel-bottom/carousel-bottom.component';
import { CarouselSeemoreComponent } from './carousel-seemore/carousel-seemore.component';
import { CarouselBestsellersComponent } from './carousel-bestsellers/carousel-bestsellers.component';
import { LogosComponent } from './logos/logos.component';

@Component({
  selector: 'home-page',
  standalone: true,
  imports: [CommonModule, CarouselComponent, 
            CarouselForyouComponent, CarouselCategoryComponent,
            CarouselNewsComponent, CarouselBottomComponent,
            CarouselSeemoreComponent, CarouselBestsellersComponent,
            LogosComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {}
