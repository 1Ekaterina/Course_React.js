import { USER_LOGIN, USER_LOGOUT, USER_ERROR } from "./types/userTypes";

const InitialState = { user: null, error: null };

function userReducer(state = InitialState, action) {
  switch (action.type) {
    case USER_LOGIN:
      return { error: null, user: action.payload };
    case USER_LOGOUT:
      return { error: null, user: null };
    case USER_ERROR:
      return { ...state, error: action.payload };
    default:
      return state;
  }
}

export default userReducer;