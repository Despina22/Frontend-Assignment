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
import { RouterModule } from '@angular/router';
import { FeaturesRoutingModule } from './features-routing.module';
import { ProductDetailsComponent } from './products/components/product-details/product-details.component';

@NgModule({
  declarations: [
    ProductCardComponent,
    ProductsComponent,
    ProductDetailsComponent,
  ],
  imports: [
    CommonModule,
    MatProgressBarModule,
    MatButtonModule,
    MatDividerModule,
    MatCardModule,
    MatTooltipModule,
    SharedModule,
    RouterModule,
    FeaturesRoutingModule,
  ],
  exports: [],
})
export class FeaturesModule {}
