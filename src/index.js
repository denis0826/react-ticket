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
store.dispatch(addTicket({ title: 'ISSUE 1', subtitle: 'subtitle ticket 1' }));
// store.dispatch(addTicket({ title: 'ISSUE 2', subtitle: 'subtitle ticket 2' }));
// store.dispatch(addTicket({ title: 'ISSUE 3', subtitle: 'subtitle ticket 3' }));

const state = store.getState();
console.log('redux is working!!', state);

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
)

ReactDOM.render(jsx, document.getElementById('root'));
registerServiceWorker();
