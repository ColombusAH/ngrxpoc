import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { ProductsActions } from './store';
@Injectable({
  providedIn: 'root',
})
export class ProductsFacadeService {
  constructor(private readonly store: Store) {}
  loadAllProducts() {
    this.store.dispatch(ProductsActions.loadProducts());
  }
}
