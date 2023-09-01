import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { Product } from '../models/product.model';
import { Category } from '../models/category.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private productsUrl = 'assets/data/menu.json';
  public categories = new BehaviorSubject<Category[]>([]);
  public selectedCategory = new BehaviorSubject<String>('');

  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.productsUrl);
  }

  fetchCategories(): Observable<Category[]> {
    this.http
      .get<{ categories: Category[] }>(this.productsUrl)
      .pipe(map((data) => data.categories))
      .subscribe((categories: Category[]) => {
        this.categories.next(categories);
      });
    return this.categories.asObservable();
  }
}
