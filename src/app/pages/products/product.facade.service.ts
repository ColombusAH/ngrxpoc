import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Filter, Product } from 'src/app/types';
import { ProductsActions, ProductsSelectors } from './store';
@Injectable({
  providedIn: 'root',
})
export class ProductsFacadeService {
  products$: Observable<Product[]>;
  filteredProducts$: Observable<Product[]>;
  constructor(private readonly store: Store) {
    this.products$ = this.store.select(ProductsSelectors.allProductsSelector);
    this.filteredProducts$ = this.store.select(
      ProductsSelectors.filteredProductSelector
    );
  }
  loadAllProducts() {
    this.store.dispatch(ProductsActions.loadProducts());
  }

  changeFilter(filter: Filter<Product>) {
    this.store.dispatch(ProductsActions.changeFilter(filter));
  }
}
