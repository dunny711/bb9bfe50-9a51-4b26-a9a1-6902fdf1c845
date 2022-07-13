import { ActionReducer } from "@ngrx/store";
import { environment } from "src/environments/environment";

export function logMetaReducer<T>(reducer: ActionReducer<T>): ActionReducer<T> {
  return function(state, action) {
    if (environment.production) {
      return reducer(state, action);
    }

    const newState = reducer(state, action);
    console.log(action, state, newState);
    return newState;
  };
}
