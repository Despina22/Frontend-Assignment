import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { ApolloTestingModule } from 'apollo-angular/testing';
import { ProductsService } from 'src/app/features/services/products.service';
import { FilterProductsComponent } from 'src/app/shared/components/filter-products/filter-products.component';
import { PaginationComponent } from 'src/app/shared/components/pagination/pagination.component';
import { SortProductsComponent } from 'src/app/shared/components/sort-products/sort-products.component';
import { FilterService } from 'src/app/shared/services/filter.service';
import { SortService } from 'src/app/shared/services/sort.service';
import { ProductsComponent } from './products.component';

describe('ProductsComponent', () => {
  let component: ProductsComponent;
  let fixture: ComponentFixture<ProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        ProductsComponent,
        SortProductsComponent,
        FilterProductsComponent,
        PaginationComponent,
      ],
      providers: [ProductsService, SortService, FilterService],
      imports: [ApolloTestingModule, MatFormFieldModule, MatSelectModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
