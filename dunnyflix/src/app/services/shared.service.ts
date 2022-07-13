import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SharedService {

  private search = new BehaviorSubject('Search');
  sharedSearch = this.search.asObservable();

  constructor() { }

  nextSaerch(search: string) {
    this.search.next(search)
  }
}
