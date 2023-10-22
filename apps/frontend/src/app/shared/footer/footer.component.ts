import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BanersComponent } from './baners/baners.component';
import { SocialContainerComponent } from './social-container/social-container.component';
import { MenuComponent } from './menu/menu.component';
import { InformationComponent } from './information/information.component';
import { NewsletterComponent } from './newsletter/newsletter.component';


@Component({
  selector: 'jd-clone-footer',
  standalone: true,
  imports: [CommonModule, BanersComponent,
            SocialContainerComponent, MenuComponent,
            InformationComponent, NewsletterComponent],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent {}
