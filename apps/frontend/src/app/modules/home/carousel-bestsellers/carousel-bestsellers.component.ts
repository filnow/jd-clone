import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';


interface CarouselItem {
  picture: string;
  price: string;
  name: string;
}

@Component({
  selector: 'homepage-carousel-bestsellers',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carousel-bestsellers.component.html',
  styleUrls: ['./carousel-bestsellers.component.css'],
})
export class CarouselBestsellersComponent {

  header: string = 'Bestsellers'

  carouselList: Array<CarouselItem> = [
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
