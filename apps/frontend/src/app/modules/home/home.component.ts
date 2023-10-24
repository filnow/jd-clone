import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselComponent } from './carousel/carousel.component';
import { CarouselCategoryComponent } from './carousel-category/carousel-category.component';
import { CarouselBottomComponent } from './carousel-bottom/carousel-bottom.component';
import { CarouselSeemoreComponent } from './carousel-seemore/carousel-seemore.component';
import { LogosComponent } from './logos/logos.component';
import { CarouselComponentComponent } from './carousel-component/carousel-component.component';

export interface CarouselItem {
  picture: string;
  price: string;
  name: string;
}

@Component({
  selector: 'home-page',
  standalone: true,
  imports: [CommonModule, CarouselComponent, 
            CarouselCategoryComponent, CarouselBottomComponent,
            CarouselSeemoreComponent, LogosComponent, 
            CarouselComponentComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {

  headerBestsellers: string = 'Bestsellers'
  headerForYou: string = 'Wybrane dla Ciebie'
  headerNew: string = 'Nowości'

  carouselList: CarouselItem[] = [
    {
      picture: '../../../assets/images/shoes/jd_120181_al.jpeg',
      price: '399,99zł',
      name: 'Converse Chuck Taylor All Star Lift',
    },
    {
      picture: '../../../assets/images/shoes/jd_556251_al.jpeg',
      price: '319,99zł',
      name: 'Nike Bluza Z Kapturem W',
    },
    {
      picture: '../../../assets/images/shoes/jd_669147_al.jpeg',
      price: '329,99zł',
      name: 'Nike Bluza Z Kapturem W'
    },
    {
      picture: '../../../assets/images/shoes/jd_556004_al.jpeg',
      price: '319,99zł',
      name: 'Nike Bluza Z Kapturem Os' 
    }

  ]
}
