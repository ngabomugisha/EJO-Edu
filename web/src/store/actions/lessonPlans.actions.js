import { HANDLE_FETCH_LESSONPLANS, HANDLE_FETCH_LESSONPLANS_SUCCESS, HANDLE_FETCH_LESSONPLANS_FAIL } from '../types';
import https from '../../helpers/https';
export const handleFetchLessonPlan = (subject) => (dispatch) => {
  console.log("Subject in Lesson Plan action", subject)
  dispatch({
    type: HANDLE_FETCH_LESSONPLANS,
  });
  return https.get(`/lessons/plans/${subject}/subject-plan`,{ headers: {'Authorization' : `Basic ${localStorage.token}` } }).then((res) => {
    dispatch({
      type: HANDLE_FETCH_LESSONPLANS_SUCCESS,
      payload: res.data,
    })
  }).catch( (error) => {
    dispatch({
      type: HANDLE_FETCH_LESSONPLANS_FAIL,
      payload: error,
    });
  })
}

