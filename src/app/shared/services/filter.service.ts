import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FilterService {
  private nameFilterSubject: BehaviorSubject<string> =
    new BehaviorSubject<string>('');

  setNameFilter(name: string): void {
    this.nameFilterSubject.next(name);
  }

  getNameFilter(): BehaviorSubject<string> {
    return this.nameFilterSubject;
  }

  clearNameFilter(): void {
    this.nameFilterSubject.next('');
  }
}
