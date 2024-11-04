import { Injectable, signal, computed } from '@angular/core';
import { productsData } from '../../models/interfaces';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  items = signal<productsData[]>([]);

  cartIsEmpty = computed(() => this.items().length === 0);
  totalCartItems = computed(() => this.items().length);
  totalCartCost = computed(() =>
    this.items().reduce((acc, item) => acc + item.price, 0)
  );

  addToCart(itemToAdd: productsData) {
    const isInCart = this.items().find((items) => items.id === itemToAdd.id);
    if (!isInCart) this.items.update((items) => [...items, itemToAdd]);
    console.log('addotocart chiamata');
  }

  removeFromCart(itemToRemove: productsData) {
    this.items.update((items) =>
      items.filter((item) => item.id !== itemToRemove.id)
    );
  }

  clearCart() {
    this.items.set([]);
  }
}
