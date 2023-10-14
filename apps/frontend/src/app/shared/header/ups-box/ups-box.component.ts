import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'header-ups-box',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ups-box.component.html',
  styleUrls: ['./ups-box.component.css'],
})
export class UpsBoxComponent {
  upsContent: Array<string> = ['Darmowa dostawa od 200zł',
                'Dodatkowe 10% na zakupy z newsletterem JD',
                'Bestsellers'
  ]
}
