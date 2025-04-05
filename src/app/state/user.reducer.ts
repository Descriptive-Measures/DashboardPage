import { createReducer, on } from '@ngrx/store';
import { TokenSet } from '../models/users/token-set.model';
import { UserActions } from './user.actions';

export const userFeatureKey = 'user';

export interface userState {
  user_id: string | null
  username: string | null
  first_name: string | null
  last_name: string | null
  email: string | null
  company_id: string | null
  token_set: Readonly<TokenSet> | null
  is_logged_in: boolean
  status: string
  error: string | null
}

export const initialState: userState = {
  user_id: null,
  username: null,
  first_name: null,
  last_name: null,
  email: null,
  company_id: null,
  token_set: null,
  is_logged_in: false,
  status: "pending",
  error: "none"
}

export const userReducer = createReducer(
  initialState,

  on(UserActions.thawTokenSet, (state, {token_status} ) => ({
    ...state, 
      token_set: token_status.token_set,
      is_logged_in: token_status.is_logged_in,
      error: null,
      status: 'active'
  })),


  on(UserActions.userLogin, (state) => ({ 
    ...state, 
      user_id: null,
      username: null,
      first_name: null,
      last_name: null,
      email: null,
      company_id: null,
      token_set: null,
      is_logged_in: false,
      status: 'loading',
      error: null,
  })),

  on(UserActions.loginSuccess, (state, {token_set}) =>  ({
    ...state,
      token_set: token_set,
      is_logged_in: true,
      error: null,
      status: 'active'
  })),



  on(UserActions.clearTokenSet, (state) => ({
    ...state, 
      token_set: null,
      is_logged_in: false,
      error: null,
      status: 'active'
  })),

  on(UserActions.tokenError, (state, {error}) => ({
    ...state, 
      token_set: null,
      error: error,
      status: 'error'
  })),

  on(UserActions.userError, (state, {error}) => ({
    ...state, 
      user_id: null,
      username: null,
      first_name: null,
      last_name: null,
      email: null,
      company_id: null,
      error: error,
      status: 'error'
  })),

  on(UserActions.userLogoff, (state) => ({
    ...state, 
      user_id: null,
      username: null,
      first_name: null,
      last_name: null,
      email: null,
      company_id: null,
      token_set: null,
      is_logged_in: false,
      error: null,
      status: 'inactive'
  })),



  on(UserActions.retrieveUserSuccess, (state, {user} ) => ({
    ...state,   
      username: user.username,
      first_name: user.first_name,
      last_name: user.last_name,
      email: user.email,
      company_id: user.company_id,
  })),
);
