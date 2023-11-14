import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { take } from 'rxjs';
import { OrdersService } from 'src/app/features/services/orders.service';
import { ProductsService } from 'src/app/features/services/products.service';
import { ProductDetails } from '../../models/product-details';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent implements OnInit {
  productId!: string;
  productDetails!: ProductDetails;
  quantity!: number;
  activeOrder: any;
  quantityMap: { [key: string]: number } = {};

  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ProductsService,
    private orderService: OrdersService
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
        this.productDetails.variants.forEach((variant) => {
          this.quantityMap[variant.id] = 0;
        });
      });
  }

  orderProduct(productVariantId: string) {
    const quantity = this.quantityMap[productVariantId] || 0;
    this.orderService
      .addItemToOrder(productVariantId, quantity)
      .pipe(take(1))
      .subscribe((res) => {
        console.log(res);
        console.log(productVariantId);
      });
  }
}
