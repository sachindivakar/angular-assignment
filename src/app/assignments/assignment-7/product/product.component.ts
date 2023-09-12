import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Product6Service } from '../../assignment-6/product-6.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  constructor(private productService: Product6Service,private router: Router) {}

  products: any[] = [];
  newProduct: any = { name: '', quantity: 0 };

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

  confirmProductDetails(productId: number,productName: string) {
    const confirmDialog = window.confirm('Are you sure you want to view the details?');
    if (confirmDialog) {
      this.router.navigate(['/assignments/7/products', productId],{
        state: { productName } // Pass the product name as state
      });
    }
  }
}
