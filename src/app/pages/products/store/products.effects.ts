import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs';
import { ProductsService } from 'src/app/core/products.service';
import * as ProductsActions from './products.actions';

@Injectable()
export class ProductsEffects {
  constructor(
    private readonly action$: Actions,
    private readonly productsService: ProductsService
  ) {}

  loadProducts = createEffect(() =>
    this.action$.pipe(
      ofType(ProductsActions.loadProducts),
      switchMap(() =>
        this.productsService
          .loadProducts()
          .pipe(
            map((products) =>
              ProductsActions.loadProductsSucceeded({ products })
            )
          )
      )
    )
  );
}
