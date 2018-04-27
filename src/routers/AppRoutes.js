import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import App from '../App';
import NotFoundPage from '../components/no-match';
import Details from '../components/details';
import Header from '../components/header';

export default () => (
  <div>  
    <Header />
    <BrowserRouter>
      <Switch>
        <Route path="/" component={App} exact={true} />
        <Route path="/ticket/:id" component={Details} />
        <Route component={NotFoundPage} />
      </Switch>
    </BrowserRouter>
  </div>
);