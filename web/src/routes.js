import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const LoginPage = lazy(() => import('./pages/Auth/Login'));
const HomePage = lazy(() => import('./pages/Home'));
const ForgetPasswordPage = lazy(() => import('./pages/Auth/ForgetPassword'));
const MainPage = lazy(() => import('./pages/Main'));
export default () => {
  return (
    <Suspense
      fallback={
        <div style={{ display: 'absolute', top: '50%', left: '50%' }}>
          <p>Loading.......</p>
        </div>
      }
    >
      <Router>
        <Switch>
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/passwords" component={ForgetPasswordPage} />
          <Route exact path="/dashboard" component={MainPage} />
          <Route exact paht="/" component={HomePage} />
        </Switch>
      </Router>
    </Suspense>
  );
};
