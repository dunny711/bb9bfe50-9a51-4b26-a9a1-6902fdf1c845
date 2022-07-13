import { MetaReducer } from "@ngrx/store";
import { logMetaReducer } from "./log.meta-reducer";

export const metaReducers: MetaReducer<any>[] = [logMetaReducer];
