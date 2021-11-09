import { Injectable } from '@angular/core';
import { ActivatedRoute, Router, RouterStateSnapshot } from '@angular/router';
import { ComponentStore } from '@ngrx/component-store';

export interface AuthPageState {
  mode: 'signIn' | 'signUp';
  username: string;
  password: string;
}

export type SignInAuthState = AuthPageState & {
  mode: 'signIn';
};

export type SignUpAuthState = AuthPageState & {
  mode: 'signUp';
  passwordConfirmation: string;
};

@Injectable()
export class AuthPageStore extends ComponentStore<AuthPageState> {
  constructor(
    private readonly route: ActivatedRoute,
    private readonly router: Router
  ) {
    super({ mode: route.snapshot.params['mode'], password: '', username: '' });
  }
}
