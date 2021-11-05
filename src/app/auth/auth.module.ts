import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from './auth.service';
import { StoreModule } from '@ngrx/store';
import * as AuthFeatureStore from './store';
import { EffectsModule } from '@ngrx/effects';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { fakeBackendProvider } from '../interceptors/fake-backend.interceptor';
import { AuthEffects } from './store/auth.effects';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(
      AuthFeatureStore.AuthFeatureKey,
      AuthFeatureStore.authReducer
    ),
    EffectsModule.forFeature([AuthEffects]),
  ],
  providers: [
    AuthService,
    fakeBackendProvider,
  ],
})
export class AuthModule {}
