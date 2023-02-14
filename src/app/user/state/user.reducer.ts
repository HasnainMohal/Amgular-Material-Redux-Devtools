import { createReducer, on } from "@ngrx/store";
import { initialState, UserState } from "./user.state";
import { customIncrement, } from "./user.actions";

const _userReducer = createReducer(
    initialState,

    on(customIncrement, (state, action) => {
        console.log("action: ", action);
        return {

            userData: state.userData.concat(action),
        };
    }),
);

export function userReducer(state: UserState[] = initialState, action: any) {
    return _userReducer(state, action);
};