import { Injectable } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { BehaviorSubject } from 'rxjs';
import { CartItem } from 'src/app/models/cartItem.model';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  public cartItems = new BehaviorSubject<CartItem[]>([]);
  constructor() {}

  addToCart(product: Product, quantity: number): void {
    let items = this.cartItems.getValue();
    const existingItem = items.find((item) => item.product.id === product.id);

    if (existingItem) {
      // If the product already exists in the cart, increment the count
      existingItem.count += quantity;
    } else {
      // If it's a new product, add it to the cart with count 1
      items.push({ product, count: quantity });
    }

    // Update the cart items
    this.cartItems.next(items);
  }

  calculateTotalPrice(): number {
    let total = 0;
    const items = this.cartItems.getValue();

    for (const item of items) {
      total += item.product.price * item.count;
    }

    return total;
  }

  clearCart() {
    // Clear the cart by setting it to an empty array.
    this.cartItems.next([]);
  }
}
