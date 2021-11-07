import { createReducer, on } from '@ngrx/store';
import * as LayoutActions from './layout.actions';

export interface LayoutState {
  isMenuOpen: boolean;
}
export const LayoutFeatureKey = 'Layout';
const initialLayoutState: LayoutState = { isMenuOpen: false };

export const layoutReducer = createReducer(
  initialLayoutState,
  on(LayoutActions.toggleMenuMode, (state,) => ({
    ...state,
    isMenuOpen: !state.isMenuOpen,
  }))
);
