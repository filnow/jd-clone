import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { cibInstagram } from '@coreui/icons';
import { IconModule } from '@coreui/icons-angular';


@Component({
  selector: 'jd-clone-banners',
  standalone: true,
  imports: [CommonModule, IconModule],
  templateUrl: './baners.component.html',
  styleUrls: ['./baners.component.css'],
})
export class BanersComponent {

  icons = { cibInstagram };
}
