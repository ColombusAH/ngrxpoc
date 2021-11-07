import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { LayoutState, LayoutSelectors, LayoutActions } from './store';

@Injectable({
  providedIn: 'root',
})
export class LayoutFacadeService {
  public readonly isMenuOpen$: Observable<boolean>;
  constructor(private readonly store: Store<LayoutState>) {
    this.isMenuOpen$ = this.store.select(LayoutSelectors.isMenuOpenState);
  }
  toggleMenu() {
    this.store.dispatch(LayoutActions.toggleMenuMode());
  }
}
