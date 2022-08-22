import { configureStore, applyMiddleware } from "@reduxjs/toolkit";
import postReducer from "./reducers/postReducer";
import thunk from 'redux-thunk'


const rootReducer = {
  posts: postReducer,
};

export const store = configureStore({ reducer: rootReducer }, applyMiddleware(thunk));
