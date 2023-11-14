import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FilterService {
  private nameFilterSubject = new BehaviorSubject<string>('');

  setNameFilter(name: string): void {
    this.nameFilterSubject.next(name);
  }

  getNameFilter(): BehaviorSubject<string> {
    console.log(this.nameFilterSubject);

    return this.nameFilterSubject;
  }
}
