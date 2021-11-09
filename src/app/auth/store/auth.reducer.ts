import { createReducer, on } from '@ngrx/store';
import { User } from 'src/app/types';
import * as AuthActions from './auth.actions';

export interface AuthState {
  currentUser: User | null;
}
const initialAuthState: AuthState = { currentUser: null };
export const AuthFeatureKey = 'Auth';
export const authReducer = createReducer(
  initialAuthState,
  on(AuthActions.loginSucceed, (state, { type, ...user }) => {
    return {
      ...state,
      currentUser: user,
    };
  })
);
