import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/auth';
import { LayoutState, LayoutSelectors, LayoutActions } from './store';

@Injectable({
  providedIn: 'root',
})
export class LayoutFacadeService {
  public readonly isMenuOpen$: Observable<boolean>;
  public readonly isUserLoggedIn$: Observable<boolean>;
  constructor(private readonly store: Store<LayoutState>, private readonly authService: AuthService) {
    this.isMenuOpen$ = this.store.select(LayoutSelectors.isMenuOpenState);
    this.isUserLoggedIn$ = this.authService.isLoggedIn$;
  }
  toggleMenu() {
    this.store.dispatch(LayoutActions.toggleMenuMode());
  }
}
