import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './store/state.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'dunnyflix';
  shoppingItems: number = 0;
  search: string ='';
  constructor(private store: Store<AppState>) {
    this.store.select('movies').subscribe(movies => {
      this.shoppingItems = movies.length -1;
    })
    
  }
  submitSearch(str?: string) {
    this.searchText = str? '' : this.search;
  }
  searchText = ''
}
