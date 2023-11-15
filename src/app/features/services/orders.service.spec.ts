import { TestBed } from '@angular/core/testing';
import { Apollo, MutationResult } from 'apollo-angular';
import { Observable, of } from 'rxjs';
import { OrdersService } from './orders.service';
import { ActiveOrderService } from './active-order.service';

describe('OrdersService', () => {
  let ordersService: OrdersService;
  let apolloMock: jasmine.SpyObj<Apollo>;
  let activeOrderServiceMock: jasmine.SpyObj<ActiveOrderService>;

  beforeEach(() => {
    const apolloSpy = jasmine.createSpyObj('Apollo', ['mutate', 'watchQuery']);
    const activeOrderServiceSpy = jasmine.createSpyObj('ActiveOrderService', [
      'setActiveOrder',
    ]);

    TestBed.configureTestingModule({
      providers: [
        OrdersService,
        { provide: Apollo, useValue: apolloSpy },
        { provide: ActiveOrderService, useValue: activeOrderServiceSpy },
      ],
    });

    ordersService = TestBed.inject(OrdersService);
    apolloMock = TestBed.inject(Apollo) as jasmine.SpyObj<Apollo>;
    activeOrderServiceMock = TestBed.inject(
      ActiveOrderService
    ) as jasmine.SpyObj<ActiveOrderService>;
  });

  it('addItemToOrder should call mutate and setActiveOrder on success', () => {
    const productVariantId = '1';
    const quantity = 1;
    const responseMock = {
      data: { addItemToOrder: 'mockedOrderData' },
      loading: false,
    };

    const response$: Observable<MutationResult<{ addItemToOrder: string }>> =
      of(responseMock);

    apolloMock.mutate.and.returnValue(response$);

    ordersService.addItemToOrder(productVariantId, quantity).subscribe(() => {
      expect(apolloMock.mutate).toHaveBeenCalledWith(jasmine.any(Object));
      expect(activeOrderServiceMock.setActiveOrder).toHaveBeenCalledWith(
        'mockedOrderData'
      );
    });
  });
});
