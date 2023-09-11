import { Component } from '@angular/core';

@Component({
  selector: 'app-product-component',
  templateUrl: './product-component.component.html',
  styleUrls: ['./product-component.component.css']
})
export class ProductComponentComponent {
  products = [
    { name: 'Product 1', quantity: 10 },
    { name: 'Product 2', quantity: 5 }
  ];

  newProduct = {
    name: '',
    quantity: 0
  };

  addProduct() {
    this.products.push({ ...this.newProduct });
    this.newProduct.name = '';
    this.newProduct.quantity = 0;
  }
}
