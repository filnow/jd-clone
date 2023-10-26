import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';


interface Menu {
  header: string;
  list: string[];
}

@Component({
  selector: 'jd-clone-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent {

  menuList: Menu[] = [
    {
      header: 'Zakupy z JD',
      list: ['Znajdź sklep', 'Dostępność']
    },
    {
      header: 'Obsługa klienta',
      list: ['Wszystkie tematy', 'Zamówienia i dostawy', 'Zwroty i reklamacje', 'Kwestie techniczne', 'Kontakt']
    },
    {
      header: 'Firma',
      list: ['Strona korporacyjna', 'Praca']
    },
    {
      header: 'Informacje',
      list: ['Regulamin sklepu', 'Regulaminy', 'Polityka prywatności', 'Polityka cookies']
    }
  ]
}
