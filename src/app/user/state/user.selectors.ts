import { createFeatureSelector, createSelector } from "@ngrx/store";
import { UserState } from "./user.state";

const getCounterState = createFeatureSelector<any>("user");

export const getCounter = createSelector(getCounterState, state => {
    return state.userData;
});

