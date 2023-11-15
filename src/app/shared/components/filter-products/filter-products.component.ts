import { Component } from '@angular/core';
import { FilterService } from '../../services/filter.service';

@Component({
  selector: 'app-filter-products',
  templateUrl: './filter-products.component.html',
  styleUrls: ['./filter-products.component.scss'],
})
export class FilterProductsComponent {
  constructor(private filterService: FilterService) {}

  onNameFilterChange(event: Event): void {
    const nameFilter = (event.target as HTMLInputElement).value;
    this.filterService.setNameFilter(nameFilter);
  }
}
