import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { take } from 'rxjs';
import { OrdersService } from 'src/app/features/services/orders.service';
import { ProductsService } from 'src/app/features/services/products.service';
import { ConfirmDialogComponent } from 'src/app/shared/components/confirm-dialog/confirm-dialog.component';
import { ProductDetails } from '../../models/product-details';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent implements OnInit {
  productDetails!: ProductDetails;
  quantity: number = 1;
  selectedVariantId: string | undefined;
  private productId!: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ProductsService,
    private orderService: OrdersService,
    private modal: MatDialog,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.productId = this.activatedRoute.snapshot.paramMap.get('productId')!;
    this.getProductDetails();
  }

  onRadioChange(variantId: string): void {
    this.selectedVariantId = variantId;
  }

  orderProduct(): void {
    const confirmDialog = this.modal.open(ConfirmDialogComponent, {
      data: {
        message: 'Are you sure you want to add this item to active order?',
      },
      position: { top: '40px' },
    });

    confirmDialog
      .afterClosed()
      .pipe(take(1))
      .subscribe((res) => {
        if (res && this.selectedVariantId) {
          if (this.quantity > 0) {
            this.orderService
              .addItemToOrder(this.selectedVariantId, this.quantity)
              .pipe(take(1))
              .subscribe(() => {
                this.router.navigate(['/order-details']);
              });
          } else {
            console.error("Quantity can't be negative");
          }
        }
      });
  }

  private getProductDetails(): void {
    this.productService
      .getProductDetails(this.productId)
      .pipe(take(1))
      .subscribe((product) => {
        this.productDetails = product;
      });
  }
}
