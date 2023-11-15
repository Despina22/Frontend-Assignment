import { Injectable } from '@angular/core';
import { Apollo, MutationResult } from 'apollo-angular';
import { Observable, map, switchMap, take, tap } from 'rxjs';
import {
  ADD_ITEM_TO_ORDER,
  GET_ACTIVE_ORDER,
} from 'src/app/qraphql.operations';
import { ActiveOrderService } from './active-order.service';
import { ApolloQueryResult } from '@apollo/client/core';

interface AddItemToOrderResponse {
  addItemToOrder: any; // Smeni go da ne bidi any
}

@Injectable({
  providedIn: 'root',
})
export class OrdersService {
  constructor(
    private apollo: Apollo,
    private activeOrderService: ActiveOrderService
  ) {}

  addItemToOrder(
    productVariantId: string,
    quantity: number
  ): Observable<MutationResult<AddItemToOrderResponse>> {
    return this.apollo
      .mutate<AddItemToOrderResponse>({
        mutation: ADD_ITEM_TO_ORDER,
        variables: {
          productVariantId,
          quantity,
        },
      })
      .pipe(
        tap((res) =>
          this.activeOrderService.setActiveOrder(res.data?.addItemToOrder)
        )
      );
  }

  getActiveOrder(): Observable<ApolloQueryResult<any>> {
    return this.apollo
      .watchQuery<any>({
        query: GET_ACTIVE_ORDER,
      })
      .valueChanges.pipe(
        take(1),
        tap((order) => this.activeOrderService.setActiveOrder(order))
      );
  }
}
