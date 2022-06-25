import { SIGNUP, LOGIN, LOGOUT } from "../constants/index";
import * as api from "../api/index";

export const signup = (body) => async (dispatch) => {
  const { data } = await api.signup(body);
  if (!data.error) {
    dispatch({ type: SIGNUP, payload: data });
  } else {
    console.log(data.error);
  }
};

export const login =
  (body = {}) =>
  async (dispatch) => {
    const { data } = await api.login(body);
    if (!data.error) {
      dispatch({ type: LOGIN, payload: data });
    } else {
      console.log(data.error);
    }
  };

export const logout = () => async (dispatch) => {
  const { data } = await api.logout();
  if (!data.error) {
    dispatch({ type: LOGOUT });
  } else {
    console.log(data.error);
  }
};
