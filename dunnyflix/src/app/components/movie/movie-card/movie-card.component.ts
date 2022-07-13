import { Component, EventEmitter, Input,Output,  OnInit } from '@angular/core';
import { Movie } from 'src/app/model/movie';
import { AppState } from 'src/app/store/state.model';
import * as MovieActions from './../../../store/actions/movie.action';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent implements OnInit {
  @Input() movie!: Movie;
  @Output() deleteMovie = new EventEmitter<Movie>();
  tofuImg: string = "assets/images/tofu.png";
  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.movie.flyerFront = this.movie.flyerFront ? this.movie.flyerFront : this.tofuImg    
  }
  navigateToMaps(venue: string){
    window.open(venue)
  }
  addMovie(movie: Movie) {
    console.log(movie)
    this.store.dispatch(new MovieActions.AddMovie({title: movie.title }) )
    this.deleteMovie.emit(movie)
  }

}
