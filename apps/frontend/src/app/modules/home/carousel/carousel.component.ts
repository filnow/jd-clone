import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselModule } from '@coreui/angular';
import {RouterModule} from '@angular/router'


@Component({
  selector: 'home-page-carousel',
  standalone: true,
  imports: [CommonModule, CarouselModule, RouterModule],
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
})
export class CarouselComponent implements OnInit {

  slides = new Array(3).fill({id: -1, src: '', title: '', subtitle: ''});

  ngOnInit(): void {
    this.slides[0] = {
      src: '../../../assets/images/Mobile_Top_Banner_720x1050 (1).avif',
    };
    this.slides[1] = {
      src: '../../../assets/images/Mobile_Top_Banner_720x1050.avif',
    }
    this.slides[2] = {
      src: '../../../assets/images/clothes/3721324_CAM_Culture_Cred_JD_PL_EN_FW23_1920x840_v2.avif',
   
    }
  }
}
