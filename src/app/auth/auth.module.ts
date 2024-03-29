import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from './auth.service';
import { StoreModule } from '@ngrx/store';
import * as AuthFeatureStore from './store';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from './store/auth.effects';
import { AuthGuard } from './guards/auth.guard';

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
  providers: [AuthService, AuthGuard],
})
export class AuthModule {}
