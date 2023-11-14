import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { SortProductsComponent } from './components/sort-products/sort-products.component';
import { TruncatePipe } from './pipes/truncate.pipe';
import { FilterProductsComponent } from './components/filter-products/filter-products.component';
import { FormsModule } from '@angular/forms';
import { ConfirmDialogComponent } from './components/confirm-dialog/confirm-dialog.component';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    SortProductsComponent,
    TruncatePipe,
    FilterProductsComponent,
    ConfirmDialogComponent,
  ],
  imports: [
    CommonModule,
    MatSelectModule,
    MatFormFieldModule,
    FormsModule,
    MatButtonModule,
  ],
  exports: [SortProductsComponent, TruncatePipe, FilterProductsComponent],
})
export class SharedModule {}
