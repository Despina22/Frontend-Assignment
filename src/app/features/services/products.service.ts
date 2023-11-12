import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { map, take } from 'rxjs';
import { GET_PRODUCTS } from 'src/app/qraphql.operations';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private apollo: Apollo) {}

  getAllProducts() {
    return this.apollo
      .watchQuery({
        query: GET_PRODUCTS,
      })
      .valueChanges.pipe(
        take(1),
        map((products) => products.data)
      );
  }
}
