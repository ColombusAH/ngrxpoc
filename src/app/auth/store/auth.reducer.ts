import { createReducer, on } from '@ngrx/store';
import * as AuthActions from './auth.actions';

export interface AuthState {
  currentUser: { username: string; role: string } | null;
}
const initialAuthState: AuthState = { currentUser: null };
export const AuthFeatureKey = 'Auth';
export const authReducer = createReducer(
  initialAuthState,
  on(AuthActions.loginSucceed, (state, { type, ...user }) => {
    console.log(user);
    return {
      ...state,
      currentUser: user,
    };
  })
);
