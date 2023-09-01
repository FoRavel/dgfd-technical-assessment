import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { ProductListComponent } from './components/product-list/product-list.component';
import { LayoutComponent } from './components/layout/layout.component';
import { CategoryListComponent } from './components/category-list/category-list.component';
import { AddToCartComponent } from './components/add-to-cart/add-to-cart.component';
import { SideCartComponent } from './components/side-cart/side-cart.component';
import { MobileCategoryListComponent } from './components/mobile-category-list/mobile-category-list.component';
import { CartComponent } from './components/cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    LayoutComponent,
    CategoryListComponent,
    AddToCartComponent,
    SideCartComponent,
    MobileCategoryListComponent,
    CartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
