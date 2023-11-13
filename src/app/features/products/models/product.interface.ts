export interface Product {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string;
  slug: string;
  description: string;
  assets: Assets[];
}

export interface Assets {
  preview: string;
}
