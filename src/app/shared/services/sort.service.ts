import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SortService {
  private sortOptionSubject: BehaviorSubject<string> =
    new BehaviorSubject<string>('id');
  sortOption$: Observable<string> = this.sortOptionSubject.asObservable();

  setSortOption(option: string): void {
    this.sortOptionSubject.next(option);
  }
}
