import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { SortProductsComponent } from './components/sort-products/sort-products.component';
import { TruncatePipe } from './pipes/truncate.pipe';
import { FilterProductsComponent } from './components/filter-products/filter-products.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [SortProductsComponent, TruncatePipe, FilterProductsComponent],
  imports: [CommonModule, MatSelectModule, MatFormFieldModule, FormsModule],
  exports: [SortProductsComponent, TruncatePipe, FilterProductsComponent],
})
export class SharedModule {}
