import { Product } from './product.interface';

export interface ProductDetails extends Product {
  variants: ProductVariant[];
}

interface ProductVariant {
  id: string;
  price: number;
  name: string;
  stockLevel: string;
}
