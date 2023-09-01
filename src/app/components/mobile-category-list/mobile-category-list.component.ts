import { Component } from '@angular/core';
import { Category } from 'src/app/models/category.model';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-mobile-category-list',
  templateUrl: './mobile-category-list.component.html',
  styleUrls: ['./mobile-category-list.component.css'],
})
export class MobileCategoryListComponent {
  categories: Category[] = [];
  selectedCategory: string | null = null;
  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.categories.subscribe((categories: Category[]) => {
      this.categories = categories;
    });
  }

  filterProductsByCategory(categoryName: string): void {
    this.productService.selectedCategory.next(categoryName);
    this.selectedCategory = categoryName;
  }
}
