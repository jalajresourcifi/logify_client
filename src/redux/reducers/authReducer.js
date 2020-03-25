import * as actionTypes from "../actions/actionTypes";
// import { updateObject } from "shared/utility";

const initialState = {
  authDone: false,
  tokenMissing: true,
  isFetching: false,
  isLoggedIn: false,
  error: false,
  message: "",
  token: null,
  user: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.TOKEN_MISSING:
      return {
        ...state,
        authDone: true,
        tokenMissing: true,
        error: true,
        message: "Token Missing"
      };
    case actionTypes.AUTH_REQUEST:
      return { ...state, isFetching: true };
    case actionTypes.AUTH_SUCCESS:
      return {
        ...state,
        token: action.token,
        user: action.user,
        authDone: true,
        isFetching: false,
        isLoggedIn: true,

        tokenMissing: false
      };
    case actionTypes.AUTH_ERROR:
      return {
        ...state,
        error: true,
        message: action.payload,
        authDone: true,
        isFetching: false,
        isLoggedIn: false
      };
    case actionTypes.CHECK_AUTH_REQUEST:
      return {
        ...state,
        isFetching: true
      };
    case actionTypes.CHECK_AUTH_SUCCESS:
      return {
        ...state,
        isFetching: false,
        isLoggedIn: true,

        authDone: true,
        token: action.token,
        user: action.user,
        tokenMissing: false
      };
    case actionTypes.CHECK_AUTH_ERROR:
      return {
        ...state,
        isFetching: false,
        isLoggedIn: false,

        error: true,
        authDone: true,
        message: action.payload
      };
    case actionTypes.AUTH_LOGOUT_REQUEST:
      return {
        ...state,
        isFetching: true
      };
    case actionTypes.AUTH_LOGOUT_SUCCESS:
      return {
        ...state,
        isFetching: false,
        isLoggedIn: false,

        token: null,
        user: null
      };
    case actionTypes.AUTH_LOGOUT_ERROR:
      return {
        ...state,
        authDone: true,
        isFetching: false,
        isLoggedIn: false,
        error: true,
        message: action.payload
      };
    case actionTypes.NETWORK_ERROR:
      return {
        ...initialState,
        authDone: true,
        error: true,
        message: action.payload
      };
    default:
      return state;
  }
};

export default reducer;
