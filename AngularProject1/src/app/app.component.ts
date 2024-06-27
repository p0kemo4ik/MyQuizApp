import { Component } from '@angular/core';
import {CommonModule} from  '@angular/common'
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './entities/components/header/header.component';
import { FooterComponent } from './entities/components/footer/footer.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angularproject1';
}
