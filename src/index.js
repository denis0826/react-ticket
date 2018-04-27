import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import { addTicket } from './actions/tickets';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import AppRouter from './routers/AppRoutes';

const store = configureStore();

//TEST DEFAULT
store.dispatch(addTicket({ title: 'ISSUE 1', subtitle: 'subtitle ticket1' }));

const state = store.getState();
console.log('redux is working!!', state);

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
)

ReactDOM.render(jsx, document.getElementById('root'));
registerServiceWorker();
