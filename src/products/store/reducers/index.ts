import {
  ActionReducerMap,
  createSelector,
  createFeatureSelector
} from '@ngrx/store';
import * as fromPizzas from './pizza.reducer';

export interface ProductState {
  pizzas: fromPizzas.PizzaState;
}

export const reducers: ActionReducerMap<ProductState> = {
  pizzas: fromPizzas.reducer
};

export const getProductsState = createFeatureSelector<ProductState>('products');

//pizzas state
export const getPizzasState = createSelector(
  getProductsState,
  (state: ProductState) => state.pizzas
);

export const getAllPizzas = createSelector(getPizzasState,fromPizzas.getPizzas)
export const getPizzasLoaded = createSelector(getPizzasState,fromPizzas.getPizzasLoaded)
export const getPizzasLoading = createSelector(getPizzasState,fromPizzas.getPizzasLoading)
