import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product.model';
import { Category } from '../../models/category.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  categories: Category[] = [];
  filteredCategories: Category[] = [];
  selectedProduct: Product | null = null;
  isCartOpen = false;
  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.categories.subscribe((categories: Category[]) => {
      this.categories = categories;
      if (this.filteredCategories.length == 0)
        this.filteredCategories = categories;
    });

    this.productService.selectedCategory.subscribe((category: any) => {
      if (category == '') this.filteredCategories = this.categories;
      else this.filterProductsByCategory(category);
    });
  }

  openProductModal(product: any): void {
    this.selectedProduct = product; // Save selected product to display in add to cart modal
  }

  filterProductsByCategory(categoryName: string): void {
    this.filteredCategories = this.categories;
    this.filteredCategories = this.filteredCategories.filter(
      (item) => item.name === categoryName
    );
  }

  openCart() {
    this.isCartOpen = true;
  }
}
