import { createFeatureSelector, createSelector } from '@ngrx/store';
import { State, Post } from './data-format';
import * as data from "./data-format";

export const allUsersState = createFeatureSelector<State>('reducer');

export const getAllUserData = createSelector(allUsersState, (state: State) => {
    return state.posts;
})

export const getSpecialUserData = createSelector(allUsersState, (state: State) => {
    let allData = state.posts;
    let specialData =[];
    for (let i = 0; i < state.posts.length; i++) {
        if(allData[i].userId === 4){
            specialData.push(allData[i]);
        }
    }
    return specialData;
})