import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'jd-clone-basket',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css'],
})
export class BasketComponent {
  basketState = 'Koszyk jest pusty'
}
