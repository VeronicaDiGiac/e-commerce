import { Component, Input, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { productsData } from '../../../models/interfaces';
import { CartService } from '../../core/cart.service';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  template: `<div class="card bg-base-100 w-64 shadow-xl">
    <figure>
      <img [src]="img" alt="product" style="width: 260px; height: 349px;" />
    </figure>
    <div class="card-body cardFixedHight">
      <div class="justify-between">
        <h2 class="card-title">{{ products.name }}</h2>

        <p>
          <strong>{{ products.price }} $</strong>
        </p>
      </div>
      <div class="card-actions justify-end">
        <button
          class="btn bg-gradient-to-r from-neutral-900 to-gray-700 text-white rounded-b-lg shadow-lg"
          (click)="cartService.addToCart(products)"
        >
          Buy Now
        </button>
      </div>
    </div>
  </div> `,
  styles: `   .cardFixedHight {
    height: 172px
  }`,
})
export default class CardComponent {
  @Input() products!: productsData;
  @Input() img!: string | [{}];
  @Input() imagePaths: string[] = [];
  @Input() sliceRange: [number, number] = [0, 0];
  @Input() customClasses: string = '';

  constructor(public cartService: CartService) {}
}
