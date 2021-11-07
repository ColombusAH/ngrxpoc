import { createAction, props } from '@ngrx/store';
import { Product, Filter } from '../../../types';

export const loadProducts = createAction('[PRODUCTS] load products');
export const loadProductsSucceeded = createAction(
  `[PRODUCTS] load products succeeded`,
  props<{ products: Product[] }>()
);
export const addProduct = createAction('[PRODUCTS] add product');

export const changeFilter = createAction(
  '[PRODUCTS] filter product',
  props<Filter<Product>>()
);
