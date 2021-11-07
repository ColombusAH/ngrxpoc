import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Filter, Product } from 'src/app/types';
import { ProductsState } from '.';

export const productsFeatureSelector =
  createFeatureSelector<ProductsState>('Products');

export const allProductsSelector = createSelector(
  productsFeatureSelector,
  (state: ProductsState) => state.products
);
export const filterSelector = createSelector(
  productsFeatureSelector,
  (state) => state.filter
);

export const filteredProductSelector = createSelector(
  filterSelector,
  allProductsSelector,
  (filter, products) => {
    if (filter && products) {
      return products.filter((product) =>
        Object.keys(filter).every((filterKey) => {
          const filterVal: any = filter[filterKey as keyof Product];
          const productVal = product[filterKey as keyof Product];
          return productVal === filterVal;
        })
      );
    }
    return products;
  }
);
