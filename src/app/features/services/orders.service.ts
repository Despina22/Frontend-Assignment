import { Injectable } from '@angular/core';
import { ApolloQueryResult } from '@apollo/client/core';
import { Apollo, MutationResult } from 'apollo-angular';
import { Observable, take, tap } from 'rxjs';
import {
  ADD_ITEM_TO_ORDER,
  GET_ACTIVE_ORDER,
} from 'src/app/qraphql.operations';
import { ActiveOrder } from '../orders/models/active-order.interface';
import { AddItemToOrder } from '../orders/models/add-item-to-order.interface';
import { ActiveOrderService } from './active-order.service';

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
  ): Observable<MutationResult<AddItemToOrder>> {
    return this.apollo
      .mutate<AddItemToOrder>({
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

  getActiveOrder(): Observable<ApolloQueryResult<ActiveOrder>> {
    return this.apollo
      .watchQuery<ActiveOrder>({
        query: GET_ACTIVE_ORDER,
      })
      .valueChanges.pipe(
        take(1),
        tap((order) => this.activeOrderService.setActiveOrder(order))
      );
  }
}
