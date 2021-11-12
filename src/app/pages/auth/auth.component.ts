import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AuthPageStore } from './auth.component.store';
import { AuthActions } from '../../auth';
import { ActivatedRoute, ActivatedRouteSnapshot, Router } from '@angular/router';
import { map, Observable, share, shareReplay, tap } from 'rxjs';
@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
  providers: [AuthPageStore],
})
export class AuthComponent {
  form: FormGroup;
  signMode$: Observable<'signIn' | 'signUp'>;
  constructor(
    private readonly authPageStore: AuthPageStore,
    private readonly fb: FormBuilder,
    private readonly store: Store,
    private readonly route: ActivatedRoute,
  ) {
    this.signMode$ = this.route.params.pipe(map(({mode}) => mode),
      tap(mode => {
        this.handleModeChange(mode);
    }),shareReplay());

    this.form = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  submit(e: Event) {
    e.preventDefault();
    this.store.dispatch(AuthActions.login(this.form.value));
  }

  private handleModeChange(mode: 'signIn' | 'signUp'){

    if(mode === 'signUp') {
      this.form.addControl('confirmPassword', new FormControl('', Validators.required))
    }
    else if ( mode === 'signIn') {
      this.form.removeControl('confirmPassword')
    }
  }
}
