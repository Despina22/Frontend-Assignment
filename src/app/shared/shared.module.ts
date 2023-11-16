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
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { PaginationComponent } from './components/pagination/pagination.component';
import { MatPaginatorModule } from '@angular/material/paginator';

const COMPONENTS = [
  SortProductsComponent,
  TruncatePipe,
  FilterProductsComponent,
  PaginationComponent,
];
@NgModule({
  declarations: [...COMPONENTS, ConfirmDialogComponent],
  imports: [
    CommonModule,
    MatSelectModule,
    MatFormFieldModule,
    FormsModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatPaginatorModule,
  ],
  exports: [...COMPONENTS],
})
export class SharedModule {}
