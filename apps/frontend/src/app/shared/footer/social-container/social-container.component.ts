import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import { cibFacebookF, cibInstagram } from '@coreui/icons';
import { IconModule } from '@coreui/icons-angular';

@Component({
  selector: 'footer-social-container',
  standalone: true,
  imports: [CommonModule, MatIconModule, IconModule],
  templateUrl: './social-container.component.html',
  styleUrls: ['./social-container.component.css'],
})
export class SocialContainerComponent {

  upsContent: Array<string> = ['Darmowa dostawa od 200zł',
                'Dodatkowe 10% na zakupy z newsletterem JD',
                'Bestsellers'
  ]

  icons = { cibFacebookF, cibInstagram };
}
