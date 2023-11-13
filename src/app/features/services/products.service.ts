import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { Observable, map, switchMap, take } from 'rxjs';
import { GET_PRODUCTS, GET_PRODUCT_DETAILS } from 'src/app/qraphql.operations';
import { SortService } from 'src/app/shared/services/sort.service';
import { Product } from '../products/models/product.interface';
import { ProductDetails } from '../products/models/product-details';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private apollo: Apollo, private sortService: SortService) {}

  getAllProducts(): Observable<Product[]> {
    return this.sortService.sortOption$.pipe(
      switchMap(
        (sortOption) =>
          this.apollo.watchQuery<Product[]>({
            query: GET_PRODUCTS,
            variables: {
              options: {
                sort: {
                  [sortOption]: 'ASC',
                },
                take: 8,
                skip: 0,
              },
            },
          }).valueChanges
      ),
      take(1),
      map((products) => products.data)
    );
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
