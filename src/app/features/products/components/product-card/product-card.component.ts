import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/features/services/products.service';
import { Product } from '../../models/product.interface';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent implements OnInit {
  products!: Product[];

  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.productsService.getAllProducts().subscribe((data: any) => {
      console.log(data.products.items);

      this.products = data.products.items;
    });
  }
}
