import { UserState } from './user.state';
import { createAction, props } from "@ngrx/store";


export const customIncrement = createAction("customincrement", props<{user: UserState}>());

