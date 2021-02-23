import { combineReducers } from 'redux';
import auth from './auth.reducers';
import school from './schools.reducers';
import student from './students.reducers';
import classes from './classes.reducers'

const reducers = combineReducers({
  auth,
  school,
  student,
  classes,
});

export default reducers;
