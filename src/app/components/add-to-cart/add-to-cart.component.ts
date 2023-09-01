import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { CartService } from 'src/app/services/cart/cart.service';

@Component({
  selector: 'app-add-to-cart',
  templateUrl: './add-to-cart.component.html',
  styleUrls: ['./add-to-cart.component.css'],
})
export class AddToCartComponent {
  @Input() product: Product = {} as Product;
  @Output() closeModal = new EventEmitter<void>();
  quantity: number = 1;
  constructor(private cartService: CartService) {}

  addToCart(product: Product): void {
    this.cartService.addToCart(this.product, this.quantity);
    this.quantity = 1;
    this.closeModal.emit();
  }

  incrementQuantity(): void {
    this.quantity++;
  }

  decrementQuantity(): void {
    if (this.quantity > 1) {
      this.quantity--;
    }
  }
}
