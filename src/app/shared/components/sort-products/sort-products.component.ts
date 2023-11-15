import { Component } from '@angular/core';
import { SortService } from '../../services/sort.service';

@Component({
  selector: 'app-sort-products',
  templateUrl: './sort-products.component.html',
  styleUrls: ['./sort-products.component.scss'],
})
export class SortProductsComponent {
  selectedSortOption: string = 'id';

  constructor(private sortService: SortService) {}

  onSortChange(): void {
    this.sortService.setSortOption(this.selectedSortOption);
  }
}
