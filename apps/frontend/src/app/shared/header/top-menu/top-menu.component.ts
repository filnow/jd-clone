import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';


interface menuListItem {
  name: string;
  url: string;
}

@Component({
  selector: 'header-top-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.css'],
})
export class TopMenuComponent {
  
  menuList: Array<menuListItem> = [
    {name: 'Zaloguj się', url: '#'},
    {name: 'Znajdź sklep', url: '#'},
    {name: 'JD Blog', url: '#'},
    {name: 'Pomoc', url: '#'},
    {name: 'Schowek', url: '#'},
    {name: 'Dostarczamy do...', url: '#'},
  ];

}
