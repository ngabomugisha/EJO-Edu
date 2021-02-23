import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//Authantication
const LoginPage = lazy(() => import('./pages/Auth/Login'));
const HomePage = lazy(() => import('./pages/Home'));
const ForgetPasswordPage = lazy(() => import('./pages/Auth/ForgetPassword'));

//Teacher
const TeacherDashboard = lazy(() => import('./pages/Teacher/Index'));
const AssignmentPage = lazy(() => import('./pages/Teacher/Assignment'))
const LessonPlanPage = lazy(() => import('./pages/Teacher/LessonPlan'))
const NewAssignmentPage = lazy(( )=> import('./components/newAssignment/NewAssignment'))
const NewLessonPlanPage = lazy(() => import('./components/newLessonplan/NewLessonPlan'))

//HeadTeacher
const HeadTeacherDashboard = lazy(() => import('./pages/HeadTeacher/Index'));
const ReadAnnouncement = lazy(() => import('./pages/HeadTeacher/announcement/Announcement'))
const ReportPage = lazy(() => import('./pages/HeadTeacher/report/Index'))
const CheckInOutPage = lazy(() => import('./pages/HeadTeacher/checkInOut/Index'))

//School-Admin
const schoolAdminDaschbord = lazy(() =>import('./pages/SCHOOL-ADMIN/index'))
const studentsPage = lazy(() => import('./pages/SCHOOL-ADMIN/student/index'))
const teachersPage = lazy(() => import('./pages/SCHOOL-ADMIN/teacher/index'))

export default () => {
  return (
    <Suspense
      fallback={
        <div className="loading">
          <p>Loading.......</p>
        </div>
      }
    >
      <Router>
        <Switch>
          {/* Authantication routes */}
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/passwords" component={ForgetPasswordPage} />

          
          {/* Teacher routes */}
          <Route exact path="/teacher/lessonPlan" component={LessonPlanPage}/>
          <Route exact path="/teacher/newLessonPlan" component={NewLessonPlanPage}/>
          <Route exact path="/teacher/assignment" component={AssignmentPage}/>
          <Route exact path="/teacher/newAssignment" component={NewAssignmentPage}/>
          <Route exact path="/teacher" component={TeacherDashboard} />


          {/* headTeacher routes */}
          <Route exact path="/headTeacher" component={HeadTeacherDashboard} />
          <Route exact path="/headTeacher/announcement" component={ReadAnnouncement} />
          <Route exact path="/headTeacher/report" component={ReportPage} />
          <Route exact path="/headTeacher/checkio" component={CheckInOutPage} />


          {/* schoolAdmin routes */}
          <Route exact path="/schoolAdmin" component={schoolAdminDaschbord}/>
          <Route exact path="/schoolAdmin/students" component={studentsPage}/>
          <Route exact path="/schoolAdmin/teachers" component={teachersPage}/>


          {/* home */}
          <Route exact paht="/" component={HomePage} />
        </Switch>
      </Router>
    </Suspense>
  );
};
