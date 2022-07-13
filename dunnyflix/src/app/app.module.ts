import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { MovieComponent } from './components/movie/movie.component';
import { MovieDetailComponent } from './components/movie/movie-detail/movie-detail.component';
import { MovieCardComponent } from './components/movie/movie-card/movie-card.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialUiModule } from 'src/material.module';
import { HttpClientModule } from '@angular/common/http';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { StoreModule } from '@ngrx/store';
// import { reducer } from './store'
import {reducer } from './store/reducers/movie.reducer'
// import { movieReducer} from './store/reducers/movie.reducer'
import { metaReducers} from './store';
import { SearchFilterPipe } from './pipes/search-filter.pipe';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MovieComponent,
    MovieDetailComponent,
    MovieCardComponent,
    ShoppingCartComponent,
    SearchFilterPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialUiModule,
    FormsModule,
    StoreModule.forRoot({
      movies: reducer
    }, {metaReducers})
    // StoreModule.forRoot({movie: reducer})

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
