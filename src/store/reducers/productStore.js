import { createAction, createReducer } from '@reduxjs/toolkit'

export const addProductListAction = createAction('product/addProductListAction')
export const clearProductListAction = createAction('product/clearProductListAction')

export const productReducer = createReducer([], (builder) => {
  builder.addCase(addProductListAction, (state, action) => action.payload);
  builder.addCase(clearProductListAction, () => []);
})
