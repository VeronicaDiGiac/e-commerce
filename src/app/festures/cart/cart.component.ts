import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  template: `
    <div class="min-h-screen flex justify-center items-center bg-gray-100 p-6">
      <!-- Carrello -->
      <div class="w-full max-w-3xl bg-white rounded-lg shadow-lg p-6">
        <!-- Titolo -->
        <h2 class="text-3xl font-bold text-gray-800 mb-6 text-center">
          Shopping Cart
        </h2>

        @if (cartService.cartIsEmpty()) {
        <div class="text-center my-6">No Items in Cart</div>
        }@else {
        <!-- Elenco Prodotti -->
        <div class="divide-y divide-gray-200">
          <!-- Prodotto -->
          @for (item of cartService.items(); track item.id){

          <div class="flex flex-col md:flex-row py-6 items-center">
            <div class="flex-1 w-full mt-4 md:mt-0">
              <h3 class="text-xl  text-gray-700">
                {{ item.name }}
              </h3>
              <span> ✔ In stock </span>
            </div>
            <!-- Quantità e Rimozione -->
            <div class="flex flex-col items-center mt-4 md:mt-0">
              <span
                class="text-gray-800 font-semibold text-lg mt-2 block m-1 p-1"
                >{{ item.price }} $</span
              >
              <div
                class=" px-6 py-3 text-purple-700 font-semibold rounded-lg transition duration-200 text-sm w-full md:w-auto cursor-pointer"
                (click)="cartService.removeFromCart(item)"
              >
                Remove
              </div>
            </div>
          </div>
          }
          <!-- Altri prodotti... -->
        </div>
        }
        <!-- Riepilogo Totale -->
        <div class="mt-8 p-4 border-t border-gray-200">
          <div
            class="flex flex-col sm:flex-row justify-between text-gray-700 font-bold text-xl space-y-2 sm:space-y-0"
          >
            <span>Subtotal € {{ cartService.totalCartCost() }}</span>
            <span class="text-sm bg-gray-200 sm:ml-4">
              Shipping and taxes will be calculated at checkout.
            </span>
          </div>

          <button
            class="w-full mt-6 bg-gradient-to-r from-neutral-900 to-gray-700 hover:bg-blue-700 text-white font-bold py-4 rounded-lg transition duration-200 text-lg"
          >
            Proceed to payment
          </button>
        </div>
        <a
          href="#"
          class="text-blue-500 hover:text-blue-700 font-semibold flex justify-center"
        >
          Continue Shopping &rarr;</a
        >
      </div>
    </div>
  `,
  styles: '',
})
export default class CartComponent {
  constructor(public cartService: CartService) {}
}
