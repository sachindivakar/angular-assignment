import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  productId: number = 0;
  productName: string = "";
  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.productId = +(params.get('id') || 0);
    });
    this.productName = history.state.productName;
  }
    // Method to navigate back to the Products page
    goBack() {
      this.router.navigate(['/assignments/7/products']);
    }
}
