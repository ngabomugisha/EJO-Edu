import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const LoginPage = lazy(() => import('./pages/Auth/Login'));
const HomePage = lazy(() => import('./pages/Home'));
const ForgetPasswordPage = lazy(() => import('./pages/Auth/ForgetPassword'));
const TeacherDashboard = lazy(() => import('./pages/Teacher/Index'));
const HeadTeacherDashboard = lazy(() => import('./pages/HeadTeacher/Index'));
const Assignment = lazy(() => import('./pages/Teacher/Assignment'))
const NewAssignmentPage = lazy(( )=> import('./components/newAssignment/NewAssignment'))
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
          <Route exact path="/teacher/assignment" component={Assignment}/>
          <Route exact path="/teacher/newAssignment" component={NewAssignmentPage}/>
          <Route exact path="/teacher" component={TeacherDashboard} />
          <Route exact path="/headTeacher" component={HeadTeacherDashboard} />
          <Route exact paht="/" component={HomePage} />
        </Switch>
      </Router>
    </Suspense>
  );
};
