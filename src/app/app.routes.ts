import { Routes } from '@angular/router';
import { authGuardFn } from '@auth0/auth0-angular';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./festures/home/home.component'),
  },
  {
    path: 'card',
    loadComponent: () => import('./festures/card/card.component'),
  },
  {
    path: 'cart',
    loadComponent: () => import('./festures/cart/cart.component'),
  },
  {
    path: 'woman-section',
    loadComponent: () =>
      import('./festures/woman-section/woman-section.component'),
  },
  {
    path: 'man-section',
    loadComponent: () => import('./festures/man-section/man-section.component'),
  },
  {
    path: 'contact',
    loadComponent: () =>
      import('./festures/contact/contact.component').then(
        (m) => m.ContactComponent
      ),
  },
  {
    path: 'profile',
    loadComponent: () =>
      import('./festures/profile/profile.component').then(
        (m) => m.ProfileComponent
      ),
    canActivate: [authGuardFn],
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];
