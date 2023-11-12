import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { Subject, map, switchMap, take } from 'rxjs';
import { GET_PRODUCTS } from 'src/app/qraphql.operations';
import { SortService } from 'src/app/shared/services/sort.service';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private apollo: Apollo, private sortService: SortService) {}

  getAllProducts() {
    return this.sortService.sortOption$.pipe(
      switchMap(
        (sortOption) =>
          this.apollo.watchQuery({
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
}
