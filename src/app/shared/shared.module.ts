import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TruncatePipe } from './pipes/truncate.pipe';
import { SortProductsComponent } from './components/sort-products/sort-products.component';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  declarations: [SortProductsComponent, TruncatePipe],
  imports: [CommonModule, MatSelectModule, MatFormFieldModule],
  exports: [SortProductsComponent, TruncatePipe],
})
export class SharedModule {}
