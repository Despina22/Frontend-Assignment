import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { Observable, Subject, combineLatest, map, switchMap, take } from 'rxjs';
import { GET_PRODUCTS, GET_PRODUCT_DETAILS } from 'src/app/qraphql.operations';
import { FilterService } from 'src/app/shared/services/filter.service';
import { SortService } from 'src/app/shared/services/sort.service';
import { ProductDetails } from '../products/models/product-details';
import { Product } from '../products/models/product.interface';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private unsubscribe$: Subject<void> = new Subject<void>();
  constructor(
    private apollo: Apollo,
    private sortService: SortService,
    private filterService: FilterService
  ) {}

  // getAllProducts(): Observable<Product[]> {
  //   return combineLatest([
  //     this.sortService.sortOption$,
  //     this.filterService.getNameFilter(),
  //   ]).pipe(
  //     switchMap(
  //       ([sortOption, filterName]) =>
  //         this.apollo.watchQuery<Product[]>({
  //           query: GET_PRODUCTS,
  //           variables: {
  //             options: {
  //               sort: {
  //                 [sortOption]: 'ASC',
  //               },
  //               take: 8,
  //               skip: 0,
  //               filter: {
  //                 name: {
  //                   contains: filterName,
  //                 },
  //               },
  //             },
  //           },
  //         }).valueChanges
  //     ),
  //     take(1),
  //     map((products) => products.data)
  //   );
  // }

  getAllProducts(): Observable<Product[]> {
    return this.filterService.getNameFilter().pipe(
      switchMap((filter) =>
        this.sortService.sortOption$.pipe(
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
                    filter: {
                      name: {
                        contains: filter,
                      },
                    },
                  },
                },
              }).valueChanges
          ),
          take(1)
        )
      ),
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
