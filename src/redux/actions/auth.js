import * as actionTypes from "./actionTypes";
import { loginUser, logoutUser, checkAuthToken } from "api/auth";
import { AUTHTOKEN } from "inc/config";
import { toastr } from "react-redux-toastr";
const getUserFromToken = token => {
  if (token) {
    try {
      return JSON.parse(atob(token.split(".")[1]));
    } catch (error) {
      console.log("Error in redux/action/auth", error);
    }
  }

  return null;
};
export const loginRequest = () => ({
  type: actionTypes.AUTH_REQUEST
});

export const loginSuccess = data => {
  console.log(data);
  return {
    type: actionTypes.AUTH_SUCCESS,
    token: data.LogifiUserToken,
    user: data.userData
  };
};

export const loginError = message => {
  toastr.warning("UnAuthorised", "Username or Password Incorrect");
  return {
    type: actionTypes.AUTH_ERROR,
    payload: message
  };
};
export const checkAuthRequest = () => ({
  type: actionTypes.CHECK_AUTH_REQUEST
});
export const checkAuthSuccess = token => {
  console.log("On Success", token);
  let user = getUserFromToken(token);
  return {
    type: actionTypes.CHECK_AUTH_SUCCESS,
    token: token,
    user: user
  };
};
export const checkAuthError = message => {
  return {
    type: actionTypes.CHECK_AUTH_ERROR,
    payload: message
  };
};
export const authNetworkError = message => ({
  type: actionTypes.NETWORK_ERROR,
  payload: message
});
export const logoutRequest = () => ({
  type: actionTypes.AUTH_LOGOUT_REQUEST
});
export const logoutSuccess = () => {
  localStorage.removeItem(AUTHTOKEN);
  toastr.warning("Logout Successful", "On " + new Date().toLocaleString());
  return {
    type: actionTypes.AUTH_LOGOUT_SUCCESS
  };
};
export const logoutError = message => ({
  type: actionTypes.AUTH_LOGOUT_ERROR,
  payload: message
});

// export const checkAuthTimeout = expirationTime => {
//   return dispatch => {
//     setTimeout(() => {
//       dispatch(logout());
//     }, expirationTime * 1000);
//   };
// };

export const checkAuth = token => {
  return dispatch => {
    //$$$$$$$$$$$ When Check
    dispatch(checkAuthRequest());
    checkAuthToken().then(res => {
      if (res.online === false) {
        toastr.warning("Network Error", "Server is Down");
        console.log(res.err);
        return dispatch(authNetworkError(res.err.message));
      } else {
        if (res.data.name === "JsonWebTokenError")
          dispatch(checkAuthError(res.data.message));
        else {
          dispatch(checkAuthSuccess(token));
        }
      }
    });
  };
};

export const login = data => {
  return dispatch => {
    dispatch(loginRequest());
    try {
      loginUser(data).then(res => {
        if (res.online === false) {
          toastr.warning("Network Error", "Server is Down");
          console.log(res.err);
          return dispatch(authNetworkError(res.err.message));
        } else {
          console.log("Login Action", res);
          if (res.status === 200) return dispatch(loginSuccess(res.data));
          if (res.status === 400) return dispatch(loginError(res.data.message));
          if (res.status === 401) return dispatch(loginError(res.data.message));
          if (res.status === 409) return dispatch(loginError(res.data.message));
        }
      });
    } catch (er) {
      console.log("Errrrrrr");
    }
  };
};
export const logout = () => {
  return dispatch => {
    console.log("Logout Running");
    dispatch(logoutRequest());
    dispatch(logoutSuccess());
  };
};
// export const auth = (email, password, isSignup) => {
//   return dispatch => {
//     dispatch(authStart());
//     const authData = {
//       email: email,
//       password: password,
//       returnSecureToken: true
//     };
//     let url =
//       "https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyB5cHT6x62tTe-g27vBDIqWcwQWBSj3uiY";
//     if (!isSignup) {
//       url =
//         "https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyB5cHT6x62tTe-g27vBDIqWcwQWBSj3uiY";
//     }
//     axios
//       .post(url, authData)
//       .then(response => {
//         const expirationDate = new Date(
//           new Date().getTime() + response.data.expiresIn * 1000
//         );
//         localStorage.setItem("token", response.data.idToken);
//         localStorage.setItem("expirationDate", expirationDate);
//         localStorage.setItem("userId", response.data.localId);
//         dispatch(authSuccess(response.data.idToken, response.data.localId));
//         dispatch(checkAuthTimeout(response.data.expiresIn));
//       })
//       .catch(err => {
//         dispatch(authFail(err.response.data.error));
//       });
//   };
// };

// export const authCheckState = () => {
//   return dispatch => {
//     const token = localStorage.getItem("token");
//     if (!token) {
//       dispatch(logout());
//     } else {
//       const expirationDate = new Date(localStorage.getItem("expirationDate"));
//       if (expirationDate <= new Date()) {
//         dispatch(logout());
//       } else {
//         const userId = localStorage.getItem("userId");
//         dispatch(authSuccess(token, userId));
//         dispatch(
//           checkAuthTimeout(
//             (expirationDate.getTime() - new Date().getTime()) / 1000
//           )
//         );
//       }
//     }
//   };
// };
