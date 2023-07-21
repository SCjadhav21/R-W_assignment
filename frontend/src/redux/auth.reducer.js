import {
  AUTH_SIGN_IN_ERROR,
  AUTH_SIGN_IN_LOADING,
  AUTH_SIGN_IN_SUCCESS,
  AUTH_SIGN_OUT,
  RESET_AUTH,
} from "./auth.types";

export const authInitalState = {
  loading: false,
  data: {
    token: "",
    username: "",
    email: "",
    isAuthenticated: false,
  },
  error: false,
};

export const authReducer = (state = authInitalState, { type, payload }) => {
  switch (type) {
    case AUTH_SIGN_IN_ERROR: {
      return {
        ...state,
        loading: false,
        error: true,
      };
    }
    case AUTH_SIGN_IN_LOADING: {
      return {
        ...state,
        loading: true,
      };
    }
    case AUTH_SIGN_IN_SUCCESS: {
      return {
        ...state,
        data: {
          token: payload.token,
          username: payload.name,
          email: payload.email,
          isAuthenticated: true,
        },
        loading: false,
      };
    }
    case AUTH_SIGN_OUT: {
      return {
        ...state,
        loading: false,
        data: {
          token: "",
          username: "",
          email: "",
          isAuthenticated: false,
        },
      };
    }
    case RESET_AUTH: {
      return {
        ...authInitalState,
      };
    }
    default: {
      return state;
    }
  }
};
