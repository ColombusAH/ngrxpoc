import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AuthFeatureKey, AuthState } from '.';

export const AuthSelector = createFeatureSelector<AuthState>(AuthFeatureKey);
export const currentUser = createSelector(
  AuthSelector,
  (state) => state.currentUser
);
