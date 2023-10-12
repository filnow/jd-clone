import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { HeaderComponent } from './shared/header/header.component';

@Component({
  standalone: true,
  imports: [RouterModule, 
            MatSlideToggleModule, 
            HeaderComponent],
  selector: 'jd-clone-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'jd-clone';
}
