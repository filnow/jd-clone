import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';


interface MenuItem {
  name: string;
  link: string;
  theme: string;
}

@Component({
  selector: 'header-main-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css'],
})
export class MainMenuComponent {

  menuItems: Array<MenuItem> = [
    {
      name: 'Damskie',
      link: '/',
      theme: 'black'
    },
    {
      name: 'Męskie',
      link: '/shop',
      theme: 'black'
    },
    {
      name: 'Dziecięce',
      link: '/about',
      theme: 'black'
    },
    {
      name: 'Wyprzedaż',
      link: '/contact',
      theme: 'orange'
    },
    {
      name: 'Only at JD',
      link: '/contact',
      theme: 'black'
    },
    {
      name: 'Marki',
      link: '/contact',
      theme: 'black'
    },
    {
      name: 'Kolekcje',
      link: '/contact',
      theme: 'black'
    },
    {
      name: 'Promocje',
      link: '/contact',
      theme: 'black'
    },
    {
      name: 'Nowości',
      link: '/contact',
      theme: 'blue'
    },
    {
      name: 'Explore',
      link: '/contact',
      theme: 'black'
    }
  ]
}
