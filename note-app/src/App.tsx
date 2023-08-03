// src/index.tsx
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './redux/reducers';
import NoteList from './components/NoteList';

const store = createStore(rootReducer);

export default () => (
  <Provider store={store}>
    <NoteList />
  </Provider>
);