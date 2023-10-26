import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { BasketComponent } from './basket/basket.component';
import { TopMenuComponent } from './top-menu/top-menu.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { UpsBoxComponent } from './ups-box/ups-box.component';

@Component({
  selector: 'jd-clone-component',
  standalone: true,
  imports: [CommonModule, 
            MatIconModule, 
            MatButtonModule,
            SearchBarComponent,
            BasketComponent,
            TopMenuComponent,
            MainMenuComponent,
            UpsBoxComponent],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  title = 'header';
  
}
