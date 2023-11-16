import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SortProductsComponent } from './components/sort-products/sort-products.component';
import { TruncatePipe } from './pipes/truncate.pipe';
import { FilterProductsComponent } from './components/filter-products/filter-products.component';
import { FormsModule } from '@angular/forms';
import { ConfirmDialogComponent } from './components/confirm-dialog/confirm-dialog.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { MaterialSharedModule } from './material-shared/material-shared.module';

const COMPONENTS = [
  SortProductsComponent,
  TruncatePipe,
  FilterProductsComponent,
  PaginationComponent,
];
@NgModule({
  declarations: [...COMPONENTS, ConfirmDialogComponent],
  imports: [CommonModule, FormsModule, MaterialSharedModule],
  exports: [...COMPONENTS],
})
export class SharedModule {}
