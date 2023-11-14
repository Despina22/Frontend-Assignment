import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ProductDetails, ProductVariant } from '../../models/product-details';
import { ProductsService } from 'src/app/features/services/products.service';

@Component({
  selector: 'app-product-variant',
  templateUrl: './product-variant.component.html',
  styleUrls: ['./product-variant.component.scss'],
})
export class ProductVariantComponent {
  @Input() productDetailsVariant: any;
  @Input() quantityMap: any;
  @Output() radioChange = new EventEmitter<string>();

  radioGroupName = 'productVariants';

  onRadioChange() {
    this.radioChange.emit(this.productDetailsVariant.id);
  }
}
