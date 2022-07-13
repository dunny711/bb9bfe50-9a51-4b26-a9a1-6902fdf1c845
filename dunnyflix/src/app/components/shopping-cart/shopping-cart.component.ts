import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Store} from '@ngrx/store';
import {Movie} from './../../model/movie'
import {AppState} from './../../store/state.model'

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {
  movies: Observable<Movie[]>;

  constructor(private store: Store<AppState>) {
    this.movies = this.store.select('movies')
   }

  ngOnInit(): void {
  }

}
