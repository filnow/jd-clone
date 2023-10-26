import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselModule } from '@coreui/angular';

@Component({
  selector: 'jd-clone-carousel-bottom',
  standalone: true,
  imports: [CommonModule, CarouselModule],
  templateUrl: './carousel-bottom.component.html',
  styleUrls: ['./carousel-bottom.component.css'],
})
export class CarouselBottomComponent implements OnInit {

  slides = new Array(4).fill({id: -1, src: '', title: '', subtitle: ''});

  ngOnInit(): void {
    this.slides[0] = {
      src: '../../../assets/images/Desktop_Middle_Banner_1704x740.avif',
    };
    this.slides[1] = {
      src: '../../../assets/images/clothes/Desktop_Middle_Banner_1704x740_5.avif',
    }
    this.slides[2] = {
      src: '../../../assets/images/clothes/Desktop_Middle_Banner_1704x740_2.avif',
   
    }
    this.slides[3] = {
      src: '../../../assets/images/Desktop_Middle_Banner_1704x740 (1).avif',
    }
  }
}
