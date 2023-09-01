import { Component } from '@angular/core';
import { Category } from '../../models/category.model';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css'],
})
export class CategoryListComponent {
  categories: Category[] = [];
  selectedCategory: string | null = '';

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

  handleClick(): void {
    // Your code to be executed when the element is clicked
    console.log('Element clicked!');
    // You can call any other methods or perform any actions here
  }
}
