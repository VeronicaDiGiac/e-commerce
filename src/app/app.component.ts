import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import NavbarComponent from './core/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent],
  template: ` <app-navbar></app-navbar>

    <div class="max-w-screen-xl mx-auto">
      <router-outlet></router-outlet>
    </div>`,
  styles: ``,
})
export class AppComponent {
  title = 'e-commerce';
}
