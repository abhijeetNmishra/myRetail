import React from 'react';
import { Router, Route } from 'react-router';

import App from '../containers/App';
import NotFound from '../containers/NotFound';

export default function getRoutes(history) {
  return (
    <Router history={history}>
      <Route path="/" component={App} />
      <Route path="*" component={NotFound} />
    </Router>
  );
}
