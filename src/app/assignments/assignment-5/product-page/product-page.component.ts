import { Component } from '@angular/core';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent {
  title = 'Demonstrating of data between components and styles demo';
  recentlyAddedProduct: { name: string, quantity: number } | null = null;

  onProductAdded(product: { name: string, quantity: number }) {
    this.recentlyAddedProduct = product;
  }
}
