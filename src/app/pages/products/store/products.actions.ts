import { createAction, props } from '@ngrx/store';
import { Product } from '../../../types';

export const loadProducts = createAction('[PRODUCTS] load products');
export const loadProductsSucceeded = createAction(
  `[PRODUCTS] load products succeeded`, props<{products:Product[]}>()
);
export const addProduct = createAction('[PRODUCTS] add product');
