import { Component } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Category } from '../../models/category.model';


@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  constructor(private productService: ProductService) {}
  categories: Category[] = [];

  ngOnInit(): void {
    this.fetchCategories();
  }

  fetchCategories(): void {
    this.productService.fetchCategories().subscribe((categories: Category[]) => {
    });
  }
}
