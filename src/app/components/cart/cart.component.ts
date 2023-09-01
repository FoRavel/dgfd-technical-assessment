import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CartItem } from 'src/app/models/cartItem.model';
import { CartService } from 'src/app/services/cart/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  cartItems: CartItem[] = [];
  totalPrice: number = 0;
  @Output() closeCart = new EventEmitter<void>();

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    // Subscribe to changes in the cart items
    this.cartService.cartItems.subscribe((items) => {
      this.cartItems = items;
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
    this.closeCart.emit();
  }
}
