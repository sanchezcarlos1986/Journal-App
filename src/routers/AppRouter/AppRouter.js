import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import {JournalScreen} from '~components';
import {AuthRouter} from '~routers';

/**
 * Represents AppRouter component
 * @constructor
 * @return {function} AppRouter
 */
export default function AppRouter() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/auth" component={AuthRouter} />
          <Route exact path="/" component={JournalScreen} />
          <Redirect to="/auth/login" />
        </Switch>
      </div>
    </Router>
  );
}
