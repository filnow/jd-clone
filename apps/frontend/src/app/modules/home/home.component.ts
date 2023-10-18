import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselComponent } from './carousel/carousel.component';
import { CarouselForyouComponent } from './carousel-foryou/carousel-foryou.component';

@Component({
  selector: 'home-page',
  standalone: true,
  imports: [CommonModule, CarouselComponent, 
            CarouselForyouComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {}
