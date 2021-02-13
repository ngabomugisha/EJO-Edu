const initialState = {
    assignment : {
        data: ['course', 'time','all']
    }
  };
  function assignmentReducer(state = initialState, action){
    switch(action.type){
      case "record":
            state = {
                ...state,
                data: [...state.data, action.payload]
            }

        case "delete":
          return{
            data : ['empty']
          }
    }
    return state;
  }
export default assignmentReducer  