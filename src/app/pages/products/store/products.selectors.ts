import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ProductsState } from '.';

export const productsFeatureSelector =
  createFeatureSelector<ProductsState>('Products');

export const allProductsSelector = createSelector(
  productsFeatureSelector,
  (state: ProductsState) => state.products
);
