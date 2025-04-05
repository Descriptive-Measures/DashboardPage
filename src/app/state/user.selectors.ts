import { createFeatureSelector, createSelector } from '@ngrx/store';
import { userFeatureKey, userState } from './user.reducer';

export const selectUser =  createFeatureSelector<userState>(userFeatureKey);

export const selectUserTokenSet =  createSelector(
    selectUser,
    (state: userState) => state.token_set
);