import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import 'uikit/dist/css/uikit.min.css'
import Icons from 'uikit/dist/js/uikit-icons';
import UIkit from 'uikit';

import {Provider} from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import {BrowserRouter} from 'react-router-dom'

import reducer from './Reducers/index'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer,
  composeEnhancers(
    applyMiddleware(thunk)
  )
);


UIkit.use(Icons);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </Provider>

  , document.getElementById('root'));
registerServiceWorker();
