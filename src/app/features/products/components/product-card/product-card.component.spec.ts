import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductCardComponent } from './product-card.component';
import { of } from 'rxjs';
import { ProductsService } from 'src/app/features/services/products.service';
import { SortService } from 'src/app/shared/services/sort.service';
import { Product } from '../../models/product.interface';

describe('ProductCardComponent', () => {
  let component: ProductCardComponent;
  let fixture: ComponentFixture<ProductCardComponent>;
  let productsServiceSpy: jasmine.SpyObj<ProductsService>;
  let sortServiceSpy: jasmine.SpyObj<SortService>;

  beforeEach(() => {
    const productsServiceSpyObj = jasmine.createSpyObj('ProductsService', [
      'getAllProducts',
    ]);
    const sortServiceSpyObj = jasmine.createSpyObj('SortService', [
      'sortOption$',
    ]);

    TestBed.configureTestingModule({
      declarations: [ProductCardComponent],
      providers: [
        { provide: ProductsService, useValue: productsServiceSpyObj },
        { provide: SortService, useValue: sortServiceSpyObj },
      ],
    });

    fixture = TestBed.createComponent(ProductCardComponent);
    component = fixture.componentInstance;
    productsServiceSpy = TestBed.inject(
      ProductsService
    ) as jasmine.SpyObj<ProductsService>;
    sortServiceSpy = TestBed.inject(SortService) as jasmine.SpyObj<SortService>;

    const mockProducts: Product[] = [];
    productsServiceSpy.getAllProducts.and.returnValue(
      of({ products: { items: mockProducts } } as any)
    );

    sortServiceSpy.sortOption$ = of(null) as any;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call getProducts during initialization', () => {
    expect(productsServiceSpy.getAllProducts).toHaveBeenCalled();
  });
});
