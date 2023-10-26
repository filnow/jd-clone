import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'jd-clone-search-bar',
  standalone: true,
  imports: [CommonModule, MatInputModule,
            MatIconModule, MatButtonModule],
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css'],
})
export class SearchBarComponent {
  placeHolder = 'Szukasz Nike, adidas, nowości itp.?';
}
