import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { ProductCardComponent } from './products/components/product-card/product-card.component';
import { ProductVariantComponent } from './products/components/product-variant/product-variant.component';
import { ProductsComponent } from './products/components/products/products.component';
import { ProductDetailsComponent } from './products/components/product-details/product-details.component';
import { OrderDetailsComponent } from './orders/components/order-details/order-details.component';
import { FeaturesRoutingModule } from './features-routing.module';
import { RouterModule } from '@angular/router';
import { MaterialFeaturesModule } from './material/material-features.module';

const COMPONENTS = [
  ProductCardComponent,
  ProductsComponent,
  ProductDetailsComponent,
  OrderDetailsComponent,
  ProductVariantComponent,
];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    FeaturesRoutingModule,
    FormsModule,
    MaterialFeaturesModule,
  ],
})
export class FeaturesModule {}
