import { SIGNUP, LOGIN, LOGOUT } from "../constants/index";

const reducer = (state = { user: {}, isLoggedIn: false }, action) => {
  switch (action.type) {
    case SIGNUP:
      return action.payload.email
        ? { user: action.payload, isLoggedIn: true }
        : { user: {}, isLoggedIn: false };
    case LOGIN:
      return action.payload.email
        ? { user: action.payload, isLoggedIn: true }
        : { user: {}, isLoggedIn: false };
    case LOGOUT:
      return { user: {}, isLoggedIn: false };
    default:
      return state;
  }
};

export default reducer;
