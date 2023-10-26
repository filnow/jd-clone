import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'jd-clone-logos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './logos.component.html',
  styleUrls: ['./logos.component.css'],
})
export class LogosComponent {

  header = 'The Brands You Love'

  logosList = [
    '../../../assets/images/logos/brand-adp.svg',
    '../../../assets/images/logos/brand-ch.svg',
    '../../../assets/images/logos/brand-co.svg',
    '../../../assets/images/logos/brand-jo.svg',
    '../../../assets/images/logos/brand-nb.svg',
    '../../../assets/images/logos/brand-nf.svg',
    '../../../assets/images/logos/brand-ni.svg',
    '../../../assets/images/logos/brand-pu.svg',
    '../../../assets/images/logos/brand-re.svg',
    '../../../assets/images/logos/brand-va.svg',
  ]

}
