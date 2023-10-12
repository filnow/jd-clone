import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';


@Component({
  selector: 'header-component',
  standalone: true,
  imports: [CommonModule, 
            MatIconModule, 
            MatButtonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  title = 'header';
}
