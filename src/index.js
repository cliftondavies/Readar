import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers/index';
import './index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';

const initialState = {
  books: {
    [Math.floor((Math.random() * 100))]: {
      title: 'YDKJS',
      category: 'Learning',
    },
    [Math.floor((Math.random() * 100))]: {
      title: 'Star Wars',
      category: 'Sci-fi',
    },
    [Math.floor((Math.random() * 100))]: {
      title: 'Dunkirk',
      category: 'History',
    },
  },
};

// const store = createStore(rootReducer, initialState);

/* eslint-disable no-underscore-dangle */
const store = createStore(
  rootReducer, initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);
/* eslint-enable */

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
