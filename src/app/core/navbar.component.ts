import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CartService } from './cart.service';
import { AuthService } from '@auth0/auth0-angular';
import { DOCUMENT } from '@angular/common';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<div class="navbar bg-base-100">
    <div class="navbar-start">
      <div class="dropdown">
        <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </div>
        <ul
          tabindex="0"
          class="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow "
        >
          <li routerLink="man-section">
            <a>Man</a>
          </li>
          <li routerLink="woman-section">
            <a>Woman</a>
          </li>
          <li routerLink="contact"><a>Contact</a></li>
        </ul>
      </div>
      <a class="btn btn-ghost text-xl" routerLink="home">Shop</a>
    </div>
    <div class="navbar-center hidden lg:flex">
      <ul class="menu menu-horizontal px-1">
        <li routerLink="man-section"><a>Man</a></li>

        <li routerLink="woman-section"><a>Woman</a></li>

        <li routerLink="contact"><a>Contact</a></li>
      </ul>
    </div>
    <div class="navbar-end">
      <div class="flex-none">
        <div class="dropdown dropdown-end">
          <div tabindex="0" role="button" class="btn btn-ghost btn-circle">
            <div class="indicator">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 m-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <span class="badge badge-sm indicator-item ">{{
                cartService.totalCartItems()
              }}</span>
            </div>
          </div>
          <div
            tabindex="0"
            class="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow"
          >
            <div class="card-body">
              <span class="text-lg font-bold"
                >{{ cartService.totalCartItems() }} Items</span
              >
              <span class="text-info"
                >Subtotal: $ {{ cartService.totalCartCost() }}
              </span>
              <div class="card-actions">
                <button class="btn btn-primary btn-block" routerLink="cart">
                  View cart
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="dropdown dropdown-end">
          <div
            tabindex="0"
            role="button"
            class="btn btn-ghost btn-circle avatar"
          >
            <div class="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
              />
            </div>
          </div>
          <ul
            tabindex="0"
            class="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            @if (authSignal()) {
            <li>
              <a
                (click)="
                  auth.logout({
                    logoutParams: { returnTo: document.location.origin }
                  })
                "
                >Logout
              </a>
            </li>

            }@else {
            <li><a (click)="auth.loginWithRedirect()">Login </a></li>
            }

            <li routerLink="profile"><a>Profile</a></li>
          </ul>
        </div>
      </div>
    </div>
  </div> `,
  styles: ``,
})
export default class NavbarComponent {
  auth = inject(AuthService);
  document = inject(DOCUMENT);
  authSignal = toSignal(this.auth.isAuthenticated$);

  constructor(public cartService: CartService) {
    this.auth.isAuthenticated$.subscribe((val) => console.log(val));
  }
}
