import { userReducer } from "../user/state/user.reducer";
import { UserState } from "../user/state/user.state";
export interface AppState {
    user: UserState,
}

export const appReducer = {
    user: userReducer,
};