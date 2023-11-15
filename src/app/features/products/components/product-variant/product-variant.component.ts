import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ProductVariant } from '../../models/product-details';

@Component({
  selector: 'app-product-variant',
  templateUrl: './product-variant.component.html',
  styleUrls: ['./product-variant.component.scss'],
})
export class ProductVariantComponent {
  @Input() productDetailsVariant?: ProductVariant;
  @Input() quantityMap: any;
  @Output() radioChange = new EventEmitter<string>();

  radioGroupName = 'productVariants';

  onRadioChange() {
    this.radioChange.emit(this.productDetailsVariant?.id);
  }
}
