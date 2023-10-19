import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';



interface CarouselItem {
  picture: string;
  name: string;
  categoryParams: Array<string>;
}

@Component({
  selector: 'homepage-carousel-category',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carousel-category.component.html',
  styleUrls: ['./carousel-category.component.css'],
})
export class CarouselCategoryComponent {

  header: string = 'Kategorie';

  carouselList: Array<CarouselItem> = [
    {
      picture: '../../../assets/images/clothes/20693e2b9a454964811ffa515e99814b.jpg',
      name: 'UBRANIA',
      categoryParams: ['Nowości', 'Bluzy', 'Spodnie'],
    },
    {
      picture: '../../../assets/images/shoes/d125fb66f1f345fcae1ee05328b39c4b.jpg',
      name: 'BUTY',
      categoryParams: ['Nowości', 'Trampki', 'Sneakersy'],
    },
    {
      picture: '../../../assets/images/clothes/32025356ea38482d9126beb96eea713f.jpg',
      name: 'MARKI',
      categoryParams: ['Hoodrich', 'Supply & Demand', 'adidas'],
    },
  ]
}
