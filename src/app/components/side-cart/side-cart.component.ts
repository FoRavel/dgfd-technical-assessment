import { Component } from '@angular/core';
import { CartItem } from 'src/app/models/cartItem.model';
import { Product } from 'src/app/models/product.model';
import { CartService } from 'src/app/services/cart/cart.service';

@Component({
  selector: 'app-side-cart',
  templateUrl: './side-cart.component.html',
  styleUrls: ['./side-cart.component.css'],
})
export class SideCartComponent {
  cartItems: CartItem[] = [];
  totalPrice: number = 0;
  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartService.cartItems.subscribe((cartItems: CartItem[]) => {
      this.cartItems = cartItems;
      this.totalPrice = this.calculateTotalPrice();
    });
  }

  calculateTotalPrice() {
    return this.cartService.calculateTotalPrice();
  }

  validateCart() {
    // Implement logic to validate the cart (e.g., process the order, send data to the server).
    // After validation, empty the cart by calling the clearCart() method from your CartService.
    this.cartService.clearCart();
  }
}
