import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselItem } from '../home.component';


@Component({
  selector: 'jd-clone-carousel-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carousel-component.component.html',
  styleUrls: ['./carousel-component.component.css'],
})
export class CarouselComponentComponent {

  @Input() header = '';
  @Input() carouselList: CarouselItem[] = []

}
