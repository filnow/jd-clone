import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';


interface CarouselItem {
  picture: string;
  price: string;
  name: string;
}

@Component({
  selector: 'homepage-carousel-news',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carousel-news.component.html',
  styleUrls: ['./carousel-news.component.css'],
})
export class CarouselNewsComponent {

  header: string = 'Nowości'

  carouselList: Array<CarouselItem> = [
    {
      picture: '../../../assets/images/clothes/jd_679966_al.jpeg',
      price: '239,99zł',
      name: 'Supply & Demand Spodnie Kerr',
    },
    {
      picture: '../../../assets/images/shoes/jd_MR530AA1WW_al.jpeg',
      price: '599,99zł',
      name: 'New Balance 530',
    },
    {
      picture: '../../../assets/images/shoes/jd_667980_al.jpeg',
      price: '599,99zł',
      name: 'Nike Dunk Low Next Nature'
    },
    {
      picture: '../../../assets/images/clothes/jd_679962_al.jpeg',
      price: '239,99zł',
      name: 'Supply & Demand Spodnie Horton' 
    }
  ]

}
