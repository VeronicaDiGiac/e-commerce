import { AsyncPipe, JsonPipe } from '@angular/common';
import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [AsyncPipe, JsonPipe],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<div
    class="max-w-md lg:max-w-2xl mx-auto bg-white shadow-xl rounded-xl overflow-hidden transform transition-all duration-300 ease-in-out"
  >
    <div class=" mt-20 ">
      <h1 class="text-3xl text-center mb-2 ">User Profile</h1>
      <h2 class="text-sm text-gray-500 text-center">
        This is some information about the user.
      </h2>
    </div>
    <div class="flex flex-col md:flex-row items-center p-8 md:p-10 lg:p-12">
      @if (user$ | async; as user) {
      <img
        class="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover border-4 border-gray-300 mb-4 md:mb-0 md:mr-6 lg:mr-8"
        [src]="user?.picture"
        alt="Profile Picture"
      />

      <div class="text-center md:text-left">
        <h2 class="text-3xl font-bold text-gray-800 lg:text-4xl">
          {{ user?.name }}
        </h2>

        <p class="text-gray-500 text-base md:text-lg mt-2">
          {{ user?.email }}
        </p>
      </div>
      }
    </div>

    <div class="border-t border-gray-200">
      <h3
        class="text-xl font-medium text-gray-800 px-8 py-4 md:px-10 md:py-6 lg:text-2xl"
      >
        Recent Orders
      </h3>
      @if(showOrders){
      <ul class="px-8 py-4 space-y-3 md:px-10 lg:space-y-4 ">
        <li class="flex items-center justify-between text-gray-700 text-lg">
          <span class="font-semibold">Order #12345</span>
          <span class="text-base text-gray-700 font-semibold">$50.00</span>
        </li>
        <li class="flex items-center justify-between text-gray-700 text-lg">
          <span class="font-semibold">Order #12346</span>
          <span class="text-base text-gray-700 font-semibold">$75.00</span>
        </li>
        <li class="flex items-center justify-between text-gray-700 text-lg">
          <span class="font-semibold">Order #12347</span>
          <span class="text-base text-gray-700 font-semibold">$30.00</span>
        </li>
      </ul>
      }
    </div>

    <div class="px-8 py-6 md:px-10 bg-gray-50 border-t border-gray-200">
      <button
        class="w-full bg-gradient-to-r from-neutral-900 to-gray-700 text-white  font-semibold text-lg py-3 rounded-lg hover:bg-blue-600 transition duration-200"
        (click)="toggleOrders()"
      >
        {{ showOrders ? 'Close' : 'View All Orders' }}
      </button>
    </div>
  </div> `,
  styles: `

`,
})
export class ProfileComponent {
  user$ = inject(AuthService).user$;
  showOrders = false;

  toggleOrders() {
    this.showOrders = !this.showOrders;
  }
}
