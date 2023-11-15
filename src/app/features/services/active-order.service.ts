import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ActiveOrderService {
  private activeOrderSubject = new BehaviorSubject<any>(null);
  activeOrder$ = this.activeOrderSubject.asObservable();

  setActiveOrder(order: any): void {
    this.activeOrderSubject.next(order);
  }
}
