import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { StoreModule } from '@ngrx/store';
import { ProductsFeatureKey, productsReducer } from './store/products.reducers';
import { EffectsModule } from '@ngrx/effects';
import { ProductsEffects } from './store/products.effects';
import { ProductsFacadeService } from './product.facade.service';

@NgModule({
  declarations: [ProductsComponent],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    StoreModule.forFeature(ProductsFeatureKey, productsReducer),
    EffectsModule.forFeature([ProductsEffects]),
  ],
  providers: [ProductsFacadeService],
})
export class ProductsModule {}
