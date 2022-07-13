import { Component, OnInit, Input, HostListener, AfterViewInit, ChangeDetectorRef, AfterContentChecked,  } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { Movie } from 'src/app/model/movie';
import { ApiService } from 'src/app/services/api.service';
import { AppState } from 'src/app/store/state.model';


@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit, AfterViewInit, AfterContentChecked{
  private subscriptions: Subscription[] = [];
  movies!: Movie[];
  unique: any[];
  currentMovieList: Movie[];
  currentDateIndex: number = 0;
  positionsOfDates: number[] = [];
  documents: HTMLCollection;
  firstinit: boolean= true;


  timer:ReturnType<typeof setTimeout>;
  init: boolean = true;
  maxOffset: number =0;
  lastScroll: number = 0;
  previousCount: number = 0;
  @Input() searchText: string = '';
  @HostListener('window:scroll', ['$event']) // for window scroll events
  onScroll(e) {
 
    let scroll = e.currentTarget.pageYOffset;
    if (scroll === 0) {
      for ( let i = 0 ; i<this.documents.length; i++) {
        this.documents[i].classList.remove('sticky');
      }
      this.documents[0].classList.add('sticky')
      return;
    }
    // maybe use setTimeout and clearTimeout iff too much data, to surpress call
    console.log(this.positionsOfDates)
    let count = 0;
    //down scroll TODO: down and up scroll
    this.positionsOfDates?.forEach(offsetY => {
      //adjust 150 due to top
      if(scroll+110 > offsetY){
        this.maxOffset = offsetY
        count++;
      }
    })
    for ( let i = 0 ; i<this.documents.length; i++) {
      this.documents[i].classList.remove('sticky');
    }
      this.documents[count].classList.add('sticky')

    scroll = this.lastScroll;
  }

 
  constructor(private apiService: ApiService, private store: Store<AppState>, private ref: ChangeDetectorRef) {
  }
  ngAfterContentChecked(): void {
    this.getBoxesOfSticky();
  }

  movie_dicts = []
   
  ngOnInit(): void {
    this.apiService.getProjects().subscribe(data => {
      (() => {
        this.movies = data.sort((a,b) => new Date(b.date).getTime() - new Date(a.date).getTime());
        this.unique =[...new Set(this.movies.map(m => m.date))]
        this.unique.forEach(date => {
          console.log(date)
          let movieToDate = {
            'date': date,
            'movies': this.movies.filter((m) => {
              return (new Date(m.date).getTime() === new Date(date).getTime())
            })

          }
          this.movie_dicts.push(movieToDate);
        })
      })();
    }
      )
    }
    ngAfterViewInit() {
      this.getBoxesOfSticky();
      this.documents[0].classList.add('sticky')

      window.scrollTo(0,0)

    }
    deleteItem(movie) {
      this.movie_dicts.forEach(movie_dict => {
        movie_dict.movies = movie_dict.movies.filter((m) => {
          return m._id !== movie._id
        })
      })
    }
    getBoxesOfSticky () {
      this.positionsOfDates = [];
      this.documents = document.getElementsByClassName('not-sticky')     
        for (let i = 1; i<this.documents.length; i++) {
          const box = this.documents[i] as HTMLElement | null
          this.positionsOfDates.push(box.offsetTop)
          this.positionsOfDates.sort((a,b) => a-b);
        }

    }
    
 
  
}




