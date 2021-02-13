const initialState = {
    slide : 1
  };
  function reducer(state = initialState, action){
    switch(action.type){
      case "NextSlide":
        return{
          slide: state.slide + 1
        };
        case "Reset":
          return{
            slide : 1
          }
    }
    return state;
  }
export default reducer  