import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, Route, browserHistory } from 'react-router';

// returns a function!
import requireAuth from './components/require_authentication';

import App from './components/app';
import Resources from './components/resources';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        {/*
          // Alternative way to wrap this component (Resources) with requiring authentication -
          you' remove the requireAuth() from here in the Router, just do requireAuth right in the Resources component code itself. See that file.
        <Route path="resources" component={Resources} />
        */}
        <Route path="resources" component={requireAuth(Resources)} />
      </Route>
    </Router>
  </Provider>
  , document.querySelector('.container'));
