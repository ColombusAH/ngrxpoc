import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Product } from 'src/app/types';
import { ProductsActions, ProductsSelectors } from './store';
@Injectable({
  providedIn: 'root',
})
export class ProductsFacadeService {
  products$: Observable<Product[]>;
  constructor(private readonly store: Store) {
    this.products$ = this.store.select(ProductsSelectors.allProductsSelector);
  }
  loadAllProducts() {
    this.store.dispatch(ProductsActions.loadProducts());
  }
}
