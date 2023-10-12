import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'header-basket',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css'],
})
export class BasketComponent {
  basketState: string = 'Koszyk jest pusty'
}
