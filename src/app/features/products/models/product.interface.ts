export interface ProductList {
  items: Product[];
  totalItems: number;
}

export interface Product {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string;
  slug: string;
  description: string;
  assets: Assets[];
}

interface Assets {
  preview: string;
}
