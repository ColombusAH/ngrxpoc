import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AuthPageStore } from './auth.component.store';
import { AuthActions } from '../../auth';
@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
  providers: [AuthPageStore],
})
export class AuthComponent implements OnInit {
  form: FormGroup;
  constructor(
    private readonly authPageStore: AuthPageStore,
    private readonly fb: FormBuilder,
    private readonly store: Store
  ) {
    this.form = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
    this.form.valueChanges.subscribe(console.log);
  }

  get passwordControl() {
    return this.form.get('password');
  }
  get usernameControl() {
    return this.form.get('username');
  }

  ngOnInit(): void {}

  submit(e: Event) {
    e.preventDefault();
    console.log(this.form.value);
    
    this.store.dispatch(AuthActions.login(this.form.value));
  }
}
