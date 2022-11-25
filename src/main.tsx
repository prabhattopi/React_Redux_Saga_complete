import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import { configureStore } from '@reduxjs/toolkit';
import catsReducer from './catState';
import catSaga from './catsSaga';
const saga = createSagaMiddleware();
const reducer:any={
  cats: catsReducer,
}
const store = configureStore({
  reducer,
  middleware: [saga],
});
saga.run(catSaga)
export type RootState=ReturnType<typeof reducer>;
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
    <App />
  </Provider>
);
