import { FETCH_USER } from "../actions/types";

const initialState = null;

export default (state = initialState, action) => {
  console.log("action: ", action);
  switch (action.type) {
    case FETCH_USER:
      // return user model or if an empty sting return false
      return action.payload || false;

    default:
      return state;
  }
};
