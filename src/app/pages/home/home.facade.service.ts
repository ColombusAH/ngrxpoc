import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';
import { User } from 'src/app/types';
import { login } from '../../auth/store';

@Injectable({
  providedIn: 'root',
})
export class HomeFacadeService {
  public readonly currentUser$: Observable<User | null>;
  public readonly isLoggedIn$: Observable<boolean>;
  constructor(
    private readonly store: Store,
    private readonly authService: AuthService
  ) {
    this.currentUser$ = this.authService.currentUser$;
    this.isLoggedIn$ = this.authService.isLoggedIn$;
  }

  login() {
    // remove mock
    this.store.dispatch(login({ username: 'user', password: '1234' }));
  }
}
