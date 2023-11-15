import { ProductVariant } from '../../products/models/product-details';

export interface ActiveOrder {
  id: string;
  createdAt: string;
  updatedAt: string;
  active: boolean;
  total: number;
  lines: {
    productVariant: ProductVariant;
  }[];
}
