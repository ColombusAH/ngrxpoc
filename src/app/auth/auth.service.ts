import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { map, Observable } from 'rxjs';
import { User, UserCreds } from '../types';
import * as ProductsSelectors from './store/auth.selectors';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public readonly currentUser$: Observable<User | null>;
  public readonly isLoggedIn$: Observable<boolean>;
  constructor(
    private readonly http: HttpClient,
    private readonly store: Store
  ) {
    this.currentUser$ = this.store.select(ProductsSelectors.currentUser);
    this.isLoggedIn$ = this.currentUser$.pipe(map((user) => !!user));
  }

  login(creds: UserCreds) {
    return this.http.post<User>(
      'http://localhost:4000/users/authenticate',
      creds
    );
  }
}
