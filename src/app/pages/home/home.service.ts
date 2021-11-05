import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { login } from '../../auth/store';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  constructor(private readonly store: Store) {}
  login() {
    this.store.dispatch(login({ username: 'user', password: '1234' }));
  }
}
