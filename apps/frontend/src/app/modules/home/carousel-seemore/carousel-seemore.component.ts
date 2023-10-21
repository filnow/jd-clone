import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';


interface CarouselItem {
  picture: string;
}

@Component({
  selector: 'homepage-carousel-seemore',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './carousel-seemore.component.html',
  styleUrls: ['./carousel-seemore.component.css'],
})
export class CarouselSeemoreComponent {


  carouselList: Array<CarouselItem> = [
    {
      picture: '../../../assets/images/clothes/Mobile_Middle_Banner_672x672.avif',
    },
    {
      picture: '../../../assets/images/shoes/672x672.avif',
    },
  ]
}
