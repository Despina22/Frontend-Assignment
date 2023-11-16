import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
})
export class PaginationComponent {
  @Input() totalItems!: number;
  @Input() itemsPerPage!: number;
  @Input() pageIndex!: number;
  @Output() pageChanged = new EventEmitter<number>();

  onPageChange(event: PageEvent) {
    this.pageChanged.next(event.pageIndex);
  }
}
