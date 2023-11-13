import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product.interface';
import { Subject, take } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/features/services/products.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent implements OnInit {
  productId!: string;
  productDetails!: Product;

  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ProductsService
  ) {}

  ngOnInit(): void {
    this.productId = this.activatedRoute.snapshot.paramMap.get('productId')!;
    this.getProductDetails();
  }

  getProductDetails() {
    this.productService
      .getProductDetails(this.productId)
      .pipe(take(1))
      .subscribe((product) => {
        this.productDetails = product;
        console.log('asd', this.productDetails);
      });
  }
}
