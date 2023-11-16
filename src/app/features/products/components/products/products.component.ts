import { Component } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { ProductsService } from 'src/app/features/services/products.service';
import { SortService } from 'src/app/shared/services/sort.service';
import { Product, ProductList } from '../../models/product.interface';
import { FilterService } from 'src/app/shared/services/filter.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent {
  products!: Product[];
  totalItems!: number;
  itemsPerPage: number = 9;
  page!: number;

  private unsubscribe$: Subject<void> = new Subject<void>();

  constructor(
    private productsService: ProductsService,
    private sortService: SortService,
    private filterService: FilterService
  ) {}

  ngOnInit(): void {
    this.filterService.clearNameFilter();
    this.getProducts();
    this.updateProducts();
  }

  onPageChange(pageIndex: number) {
    this.page = pageIndex;
    this.getProducts();
  }

  getProducts(): void {
    console.log('bbb');
    this.productsService
      .getAllProducts(this.itemsPerPage, this.page)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((data: any) => {
        this.products = data.products.items;
        this.totalItems = data.products.totalItems;
      });
  }

  private updateProducts(): void {
    this.sortService.sortOption$
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(() => {
        this.getProducts();
      });
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
