import { Component, OnInit } from '@angular/core';
import { ActiveOrderService } from 'src/app/features/services/active-order.service';
import { OrdersService } from 'src/app/features/services/orders.service';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.scss'],
})
export class OrderDetailsComponent implements OnInit {
  activeOrder: any;

  constructor(private activeOrderService: ActiveOrderService) {}

  ngOnInit(): void {
    this.getActiveOrder();
  }

  getActiveOrder() {
    this.activeOrderService.activeOrder$.subscribe((order) => {
      this.activeOrder = order;
      console.log('Active order:', this.activeOrder);
    });
  }
}
