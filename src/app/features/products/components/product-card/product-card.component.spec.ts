import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { MatCardModule } from '@angular/material/card';
import { ProductCardComponent } from './product-card.component';
import { Product } from '../../models/product.interface';
import { TruncatePipe } from 'src/app/shared/pipes/truncate.pipe';
import { MatTooltipModule } from '@angular/material/tooltip';

describe('ProductCardComponent', () => {
  let component: ProductCardComponent;
  let fixture: ComponentFixture<ProductCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductCardComponent, TruncatePipe],
      imports: [MatCardModule, RouterTestingModule, MatTooltipModule],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductCardComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display product information correctly', () => {
    const product: Product = {
      id: '1',
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'Laptop',
      slug: '2023',
      description:
        'Now equipped with seventh-generation Intel Core processors, Laptop is snappier than ever. From daily tasks like launching apps and opening files to more advanced computing, you can power through your day thanks to faster SSDs and Turbo Boost processing up to 3.6GHz.',
      assets: [
        {
          preview:
            'https://demo.vendure.io/assets/preview/71/derick-david-409858-unsplash__preview.jpg',
        },
      ],
    };

    component.product = product;
    fixture.detectChanges();

    const productNameElement = fixture.debugElement.query(
      By.css('.product-card-title')
    );
    expect(productNameElement.nativeElement.textContent).toContain(
      product.name
    );

    const productImageElement = fixture.debugElement.query(
      By.css('.product-img')
    );
    expect(productImageElement.nativeElement.src).toContain(
      product.assets[0].preview
    );

    const productDescriptionElement = fixture.debugElement.query(
      By.css('.card-content p:first-child')
    );
    expect(productDescriptionElement.nativeElement.textContent).toContain(
      'Now equipped with seventh-generation Intel Core processors, Laptop is snappier than ever.'
    );

    const productCreatedAtElement = fixture.debugElement.query(
      By.css('.card-content p:last-child')
    );
    expect(productCreatedAtElement.nativeElement.textContent).toContain(
      new Date().getFullYear().toString()
    );
  });
});
