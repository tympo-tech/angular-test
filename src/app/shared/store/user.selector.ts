import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UserState } from './user.reducer';

const selectUserState = createFeatureSelector<UserState>('user');

export const selectUserEmail = createSelector(
  selectUserState,
  (state) => state.email
);

export const selectUserIsLoggedIn = createSelector(
  selectUserState,
  (state) => state.loggedIn
);
