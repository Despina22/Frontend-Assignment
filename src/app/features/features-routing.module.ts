import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products/components/products/products.component';
import { ProductDetailsComponent } from './products/components/product-details/product-details.component';
import { OrderDetailsComponent } from './orders/components/order-details/order-details.component';

const routes: Routes = [
  {
    path: '',
    component: ProductsComponent,
  },
  { path: 'product/:productId', component: ProductDetailsComponent },
  { path: 'order-details', component: OrderDetailsComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FeaturesRoutingModule {}
