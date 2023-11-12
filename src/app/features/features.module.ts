import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ProductCardComponent } from './products/components/product-card/product-card.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import { MatTooltipModule } from '@angular/material/tooltip';
import { SharedModule } from '../shared/shared.module';
import { ProductsComponent } from './products/components/products/products.component';

@NgModule({
  declarations: [ProductCardComponent, ProductsComponent],
  imports: [
    CommonModule,
    MatProgressBarModule,
    MatButtonModule,
    MatDividerModule,
    MatCardModule,
    MatTooltipModule,
    SharedModule,
  ],
  exports: [ProductsComponent],
})
export class FeaturesModule {}
