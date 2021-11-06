import { createReducer, on } from '@ngrx/store';
import { Product } from '../../../types';
import * as ProductsActions from './products.actions';

export interface ProductsState {
  products: Product[];
}
export const ProductsFeatureKey = 'Products';

const initialProductsState: ProductsState = {
  products: [],
};

export const productsReducer = createReducer(
  initialProductsState,
  on(ProductsActions.loadProductsSucceeded, (state, { products }) => {
    return {
      ...state,
      products,
    };
  })
);
