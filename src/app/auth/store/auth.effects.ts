import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { of } from 'rxjs';
import { map, mergeMap, catchError, switchMap } from 'rxjs/operators';
import { UserCreds } from 'src/app/types';
import { AuthService } from '../auth.service';
import * as AuthActions from './auth.actions';
@Injectable()
export class AuthEffects {
  constructor(
    private readonly action$: Actions,
    private readonly authService: AuthService
  ) {}

  login$ = createEffect(() =>
    this.action$.pipe(
      ofType(AuthActions.login),
      switchMap((creds: UserCreds) =>
        this.authService
          .login(creds)
          .pipe(map((user) => AuthActions.loginSucceed(user)))
      )
    )
  );
}
