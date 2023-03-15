const INIT_STATE = {
    wishes: []
  };
  
  export const wishReducer = ( state=INIT_STATE, action) => {
    switch (action.type){
      case "ADD_WISH": 
       return {
        ...state,
        wishes: [...state.wishes, action.payload]
      }
  
  
      case "RMV_WISH": 
      const wishData = state.wishes.filter((el) => el.id !== action.payload);
        return {
          ...state,
          wishes: wishData
        }
      default:
        return state
    }
  }