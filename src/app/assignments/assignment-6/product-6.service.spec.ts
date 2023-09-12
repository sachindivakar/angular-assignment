import { TestBed } from '@angular/core/testing';

import { Product6Service } from './product-6.service';

describe('Product6Service', () => {
  let service: Product6Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Product6Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
