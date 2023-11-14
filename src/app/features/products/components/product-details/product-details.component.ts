import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { take } from 'rxjs';
import { OrdersService } from 'src/app/features/services/orders.service';
import { ProductsService } from 'src/app/features/services/products.service';
import { ProductDetails } from '../../models/product-details';
import { ConfirmDialogComponent } from 'src/app/shared/components/confirm-dialog/confirm-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent implements OnInit {
  productId!: string;
  productDetails!: ProductDetails;
  quantity: number = 1;
  activeOrder: any;

  selectedVariantId: string | undefined;

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

  getProductDetails() {
    this.productService
      .getProductDetails(this.productId)
      .pipe(take(1))
      .subscribe((product) => {
        this.productDetails = product;
      });
  }

  onRadioChange(variantId: string) {
    this.selectedVariantId = variantId;
  }

  orderProduct() {
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
}
