import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OrderDetailsComponent } from './order-details.component';
import { ActiveOrderService } from 'src/app/features/services/active-order.service';
import { MatIconModule } from '@angular/material/icon';

describe('OrderDetailsComponent', () => {
  let component: OrderDetailsComponent;
  let fixture: ComponentFixture<OrderDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OrderDetailsComponent],
      providers: [ActiveOrderService],
      imports: [MatIconModule],
    }).compileComponents();

    fixture = TestBed.createComponent(OrderDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
