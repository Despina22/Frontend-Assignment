import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../models/product.interface';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent implements OnInit {
  @Input() product!: Product;
  public productImageLink: string = '';

  ngOnInit(): void {
    if (this.product && this.product.assets.length > 0) {
      this.productImageLink = this.product.assets[0].preview;
    }
  }
}
