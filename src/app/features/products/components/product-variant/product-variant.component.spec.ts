import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatRadioModule } from '@angular/material/radio';

import { ProductVariantComponent } from './product-variant.component';

describe('ProductVariantComponent', () => {
  let component: ProductVariantComponent;
  let fixture: ComponentFixture<ProductVariantComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductVariantComponent],
      imports: [MatRadioModule],
    });

    fixture = TestBed.createComponent(ProductVariantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
