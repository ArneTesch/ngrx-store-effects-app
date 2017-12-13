import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';
import * as fromPizzas from './pizzas.reducer';

export interface ProductState {
  pizzas: fromPizzas.PizzaState;
}
// STATE TREE ==>
/*
const state = {
  products: {
    pizzas: {
      data: [],
      loaded: false,
      loading: false
    }
  }
};
*/

export const reducers: ActionReducerMap<ProductState> = {
  pizzas: fromPizzas.reducer,
};

export const getProductsState = createFeatureSelector<ProductState>('products');
