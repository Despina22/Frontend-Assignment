export interface Product {
  id: string;
  createdAt: Date;
  name: string;
  slug: string;
  description: string;
  assets: Assets[];
}

export interface Assets {
  preview: string;
}
