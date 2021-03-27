// import { HANDLE_FETCH_LESSONPLANS_SUCCESS} from '../types';

// const INITIAL_LESSONPLAN_STATE = {
//   list: [],
// };

// export default (state = INITIAL_LESSONPLAN_STATE, { type, payload }) => {
//   switch (type) {
//     case HANDLE_FETCH_LESSONPLAN_SUCCESS:
//       return {
//         ...state,
//         list: payload,
//       };break;
//     default:
//       return state;
//   }
// };


import { HANDLE_FETCH_LESSONPLANS_SUCCESS, HANDLE_FETCH_LESSONPLANS_FAIL } from '../types';

const INITIAL_LESSONPLANS_STATE = {
  list: [],
};

export default (state = INITIAL_LESSONPLANS_STATE, { type, payload }) => {
  switch (type) {
    case HANDLE_FETCH_LESSONPLANS_SUCCESS:
      return {
        ...state,
        list: payload,
        loading: false
      };
    default:
      case HANDLE_FETCH_LESSONPLANS_FAIL:
        return {
          ...state,
          error: {
            status: true, message: payload
          }
        }
      return state;
  }
};
