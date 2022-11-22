import { createAction, createReducer } from "@reduxjs/toolkit";

const LOCALE_STORAGE_NAME = "auth-state";

const localStorageState = localStorage.getItem(LOCALE_STORAGE_NAME);
const initialState = localStorageState ? JSON.parse(localStorageState) : null;

export const signInAction = createAction("auth/signInAction");
export const logOutAction = createAction("auth/logoutAction");

export const authReducer = createReducer(initialState, (builder) => {
  builder.addCase(signInAction, (state, action) => {
    localStorage.setItem(LOCALE_STORAGE_NAME, JSON.stringify(action.payload));
    return action.payload;
  });
  builder.addCase(logOutAction, () => {
    localStorage.removeItem(LOCALE_STORAGE_NAME);
    return null;
  });
});
