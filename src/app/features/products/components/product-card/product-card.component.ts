import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/features/services/products.service';
import { Product } from '../../models/product.interface';
import { SortService } from 'src/app/shared/services/sort.service';
import { take } from 'rxjs';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent implements OnInit {
  products!: Product[];

  constructor(
    private productsService: ProductsService,
    private sortService: SortService
  ) {}

  ngOnInit(): void {
    this.getProducts();
    this.updateProducts();
  }

  getProducts(): void {
    this.productsService.getAllProducts().subscribe((data: any) => {
      this.products = data.products.items;
    });
  }

  private updateProducts(): void {
    this.sortService.sortOption$.subscribe(() => {
      this.getProducts();
    });
  }
}
