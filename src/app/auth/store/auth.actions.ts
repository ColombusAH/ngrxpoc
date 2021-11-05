import { createAction, props } from '@ngrx/store';
import { User, UserCreds } from 'src/app/types';

export const login = createAction(
  '[AUTH] login',
  props<UserCreds>()
);

export const loginSucceed = createAction('[AUTH] login succeed', props<User>());
