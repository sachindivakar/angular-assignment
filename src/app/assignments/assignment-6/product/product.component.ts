import { Component, EventEmitter, Output } from '@angular/core';

import { Product6Service as ProductService } from '../product-6.service';
@Component({
  selector: 'app-product-component-6',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent6 {
  products: any[] = [];
  newProduct: any = { name: '', quantity: 0 };

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.getProducts();
  }

  getProducts() {
    this.productService.getProducts().subscribe((data: any) => {
      this.products = data;
    });
  }

  addProduct() {
    this.productService.addProduct(this.newProduct).subscribe(() => {
      this.getProducts();
      this.newProduct = { name: '', quantity: 0 };
    });
  }
}
