import { createReducer, on } from '@ngrx/store';
import { Product, Filter } from '../../../types';
import * as ProductsActions from './products.actions';

export interface ProductsState {
  products: Product[];
  filter: Filter<Product>;
}
export const ProductsFeatureKey = 'Products';

const initialProductsState: ProductsState = {
  products: [],
  filter: {},
};

export const productsReducer = createReducer(
  initialProductsState,
  on(ProductsActions.loadProductsSucceeded, (state, { products }) => {
    return {
      ...state,
      products,
    };
  }),
  on(ProductsActions.changeFilter, (state, {type, ...filter})=>({...state, filter}))
);
