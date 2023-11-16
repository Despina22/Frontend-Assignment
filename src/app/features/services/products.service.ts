import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { Observable, map } from 'rxjs';
import { GET_PRODUCTS, GET_PRODUCT_DETAILS } from 'src/app/qraphql.operations';
import { ProductDetails } from '../products/models/product-details';
import { ProductList } from '../products/models/product.interface';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private apollo: Apollo) {}

  getAllProducts(
    itemsPerPage: number,
    pageIndex: number,
    filter: string,
    sortName: string
  ): Observable<ProductList> {
    return this.apollo
      .watchQuery<ProductList>({
        query: GET_PRODUCTS,
        variables: {
          options: {
            take: itemsPerPage,
            skip: pageIndex * itemsPerPage,
            filter: {
              name: {
                contains: filter,
              },
            },
            sort: {
              [sortName]: 'ASC',
            },
          },
        },
      })
      .valueChanges.pipe(map((products) => products.data));
  }

  getProductDetails(productId: string): Observable<ProductDetails> {
    return this.apollo
      .watchQuery<{ product: ProductDetails }>({
        query: GET_PRODUCT_DETAILS,
        variables: { productId },
      })
      .valueChanges.pipe(map((res) => res.data.product));
  }
}
