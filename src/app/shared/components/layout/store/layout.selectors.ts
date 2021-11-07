import { createFeatureSelector, createSelector } from '@ngrx/store';
import { LayoutFeatureKey, LayoutState } from './layout.reducer';

export const LayoutSelector =
  createFeatureSelector<LayoutState>(LayoutFeatureKey);
export const isMenuOpenState = createSelector(
  LayoutSelector,
  (state) => state.isMenuOpen
);
