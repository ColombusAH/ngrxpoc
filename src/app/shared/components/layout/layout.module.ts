import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { RouterModule } from '@angular/router';
import { LayoutFacadeService } from './layout.facade.service';
import { StoreModule } from '@ngrx/store';
import * as LayoutFeatureStore from './store';

@NgModule({
  declarations: [LayoutComponent],
  imports: [
    CommonModule,
    RouterModule,
    StoreModule.forFeature(
      LayoutFeatureStore.LayoutFeatureKey,
      LayoutFeatureStore.layoutReducer
    ),
  ],
  providers: [LayoutFacadeService],
  exports: [LayoutComponent],
})
export class LayoutModule {}
