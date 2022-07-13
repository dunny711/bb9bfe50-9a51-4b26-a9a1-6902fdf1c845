import { Action, createAction, props } from '@ngrx/store'
import {Movie } from '../../model/movie'

export const ADD_MOVIE = '[MOVIE] ADD'
export const REMOVE_MOVIE = '[MOVIE] REMOVED'

export class AddMovie implements Action {
    readonly type = ADD_MOVIE

    constructor(public payload: Movie) {

    }
}
export class RemoveMovie implements Action {
    readonly type = REMOVE_MOVIE

    constructor(public payload: Movie) {

    }
}

export type Actions = AddMovie | RemoveMovie

  