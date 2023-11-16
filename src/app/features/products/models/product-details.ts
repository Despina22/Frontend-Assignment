import { Product } from './product.interface';

export interface ProductDetails extends Product {
  variants: ProductVariant[];
}
export interface ProductVariant {
  id: string;
  price: number;
  name: string;
  stockLevel: string;
}
