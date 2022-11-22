import { configureStore } from "@reduxjs/toolkit";
import basketReducer from './reducers/basketStore.js';
import { productReducer } from './reducers/productStore';
import { authReducer } from './reducers/authStore';



export default configureStore({
  reducer: {
    basket: basketReducer,
    product: productReducer,
    auth: authReducer
  }
})