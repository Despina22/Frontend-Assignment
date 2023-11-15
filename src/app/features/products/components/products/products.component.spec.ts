import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ApolloTestingModule } from 'apollo-angular/testing';
import { FilterProductsComponent } from 'src/app/shared/components/filter-products/filter-products.component';
import { SortProductsComponent } from 'src/app/shared/components/sort-products/sort-products.component';
import { ProductCardComponent } from '../product-card/product-card.component';
import { ProductsComponent } from './products.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';

describe('ProductsComponent', () => {
  let component: ProductsComponent;
  let fixture: ComponentFixture<ProductsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        ProductsComponent,
        SortProductsComponent,
        FilterProductsComponent,
        ProductCardComponent,
      ],
      imports: [ApolloTestingModule, MatFormFieldModule, MatSelectModule],
    });

    fixture = TestBed.createComponent(ProductsComponent);
    component = fixture.componentInstance;
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });
});
