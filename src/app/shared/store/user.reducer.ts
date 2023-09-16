import { createReducer, on } from '@ngrx/store';
import * as UserActions from './user.actions';

export interface UserState {
  loggedIn: boolean;
  email: string | null;
}

export const initialState: UserState = {
  loggedIn: false,
  email: null,
};

export const userReducer = createReducer(
  initialState,
  on(UserActions.login, (state, { email }) => ({
    ...state,
    loggedIn: true,
    email,
  })),
  on(UserActions.logout, (state) => ({
    ...state,
    loggedIn: false,
    email: null,
  }))
);
