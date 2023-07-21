// Auth Actions here
import axios from "axios";
import {
  AUTH_SIGN_IN_ERROR,
  AUTH_SIGN_IN_LOADING,
  AUTH_SIGN_IN_SUCCESS,
} from "./auth.types";

export const loginuser = (cred) => async (dispatch) => {
  dispatch({ type: AUTH_SIGN_IN_LOADING });
  try {
    dispatch({ type: AUTH_SIGN_IN_SUCCESS, payload: cred });
  } catch (error) {
    dispatch({ type: AUTH_SIGN_IN_ERROR });
  }
};
