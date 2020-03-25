import { wrappedFetch, wrappedGet } from "./urlFuncs";
import { LOGIN_URL, CHECK_AUTH_TOKEN_URL, LOGOUT_URL } from "inc/constants";
export const loginUser = data => {
  return wrappedFetch(LOGIN_URL, "POST", data);
};
export const logoutUser = data => {
  return wrappedFetch(LOGOUT_URL, "POST", data);
};
export const checkAuthToken = token => {
  return wrappedGet(CHECK_AUTH_TOKEN_URL, "GET");
};
