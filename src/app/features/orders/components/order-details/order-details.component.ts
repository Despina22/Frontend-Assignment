import { Component, OnInit } from '@angular/core';
import { ActiveOrderService } from 'src/app/features/services/active-order.service';
import { ActiveOrder } from '../../models/active-order.interface';
import { take } from 'rxjs';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.scss'],
})
export class OrderDetailsComponent implements OnInit {
  activeOrder!: ActiveOrder;

  constructor(private activeOrderService: ActiveOrderService) {}

  ngOnInit(): void {
    this.getActiveOrder();
  }

  private getActiveOrder(): void {
    this.activeOrderService.activeOrder$.pipe(take(1)).subscribe((order) => {
      this.activeOrder = order;
    });
  }
}
