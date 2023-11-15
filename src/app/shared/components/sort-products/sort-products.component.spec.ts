import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SortProductsComponent } from './sort-products.component';
import { SortService } from '../../services/sort.service';

describe('SortProductsComponent', () => {
  let component: SortProductsComponent;
  let fixture: ComponentFixture<SortProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SortProductsComponent],
      imports: [
        FormsModule,
        MatFormFieldModule,
        MatSelectModule,
        BrowserAnimationsModule,
      ],
      providers: [SortService],
    }).compileComponents();

    fixture = TestBed.createComponent(SortProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set the selected sort option when changed', () => {
    const sortService = TestBed.inject(SortService);
    spyOn(sortService, 'setSortOption');

    component.selectedSortOption = 'name';
    component.onSortChange();

    expect(sortService.setSortOption).toHaveBeenCalledWith('name');
  });
});
