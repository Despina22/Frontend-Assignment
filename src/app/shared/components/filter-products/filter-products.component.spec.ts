import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FilterProductsComponent } from './filter-products.component';
import { FilterService } from '../../services/filter.service';

describe('FilterProductsComponent', () => {
  let component: FilterProductsComponent;
  let fixture: ComponentFixture<FilterProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FilterProductsComponent],
      imports: [
        FormsModule,
        MatFormFieldModule,
        MatInputModule,
        BrowserAnimationsModule,
      ],
      providers: [FilterService],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should update name filter on input change', () => {
    const filterService = TestBed.inject(FilterService);
    const inputElement = fixture.nativeElement.querySelector('input');

    inputElement.value = 'Laptop';
    inputElement.dispatchEvent(new Event('input'));

    expect(filterService.getNameFilter().getValue()).toBe('Laptop');
  });
});
