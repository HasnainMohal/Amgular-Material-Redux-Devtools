import { counterReducer } from "../user/state/counter.reducer";
import { CounterState } from "../user/state/counter.state";
export interface AppState {
    counter: CounterState,
}

export const appReducer = {
    counter: counterReducer,
};