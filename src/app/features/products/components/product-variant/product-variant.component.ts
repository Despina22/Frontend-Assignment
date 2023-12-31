import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ProductVariant } from '../../models/product-details';

@Component({
  selector: 'app-product-variant',
  templateUrl: './product-variant.component.html',
  styleUrls: ['./product-variant.component.scss'],
})
export class ProductVariantComponent {
  @Input() productDetailsVariant?: ProductVariant;
  @Input() quantityMap?: number;
  @Output() radioChange = new EventEmitter<string>();

  radioGroupName = 'productVariants';

  onRadioChange(): void {
    this.radioChange.emit(this.productDetailsVariant?.id);
  }
}
