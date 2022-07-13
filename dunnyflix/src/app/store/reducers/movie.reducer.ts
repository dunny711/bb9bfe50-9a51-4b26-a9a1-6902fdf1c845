import { state } from '@angular/animations'
import { Action, createReducer, on } from '@ngrx/store'
import {Movie } from '../../model/movie'
import * as MovieActions from '../actions/movie.action'

const initialState: Movie = {
    title: 'Test',
}

export function reducer(state: Movie[] = [initialState], action: MovieActions.Actions) {
    switch(action.type) {
        case MovieActions.ADD_MOVIE:
            return [...state, action.payload]

        default:
            return state
    }

}
// export const selectedDocument = createReducer(
//     initialState,
//     on(MovieActions.SelectedDocumentAction.set, (_, action) => action.value)
//   );
  