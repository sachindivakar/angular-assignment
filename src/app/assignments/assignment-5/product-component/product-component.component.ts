import { Component, EventEmitter, Input, Output } from '@angular/core';


@Component({
  selector: 'app-product-component-5',
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

  @Input() title: string = "";

  @Output() productAdded = new EventEmitter<{ name: string, quantity: number }>();
  addProduct() {
    const newProduct = { ...this.newProduct };
    this.products.push(newProduct);
    this.newProduct.name = '';
    this.newProduct.quantity = 0;

    // Emit the event to pass the recently added product to AppComponent
    this.productAdded.emit(newProduct);
  }
}
