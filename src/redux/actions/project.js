import * as actionTypes from "./actionTypes";
import {
  projectListApi,
  addProjectApi,
  projectShowApi,
  projectUpdateApi,
  projectDeleteApi
} from "api/project";
import { toastr } from "react-redux-toastr";

export const addProjectRequest = () => ({
  type: actionTypes.PROJECT_ADD_REQUEST,
  payload: {}
});
export const addProjectSuccess = () => ({
  type: actionTypes.PROJECT_ADD_SUCCESS
});
export const addProjectError = message => ({
  type: actionTypes.PROJECT_ADD_ERROR,
  payload: message
});
// export const networkError = message => ({
//   type: actionTypes.NETWORK_ERROR,
//   payload: message
// });

export const projectListRequest = () => {
  return {
    type: actionTypes.PROJECT_LIST_REQUEST
  };
};
export const projectListSuccess = data => {
  return {
    type: actionTypes.PROJECT_LIST_SUCCESS,
    payload: data
  };
};
export const projectListError = message => {
  return {
    type: actionTypes.PROJECT_LIST_ERROR,
    payload: message
  };
};
export const projectShowRequest = () => {
  return {
    type: actionTypes.PROJECT_SHOW_REQUEST
  };
};
export const projectShowSuccess = data => {
  return {
    type: actionTypes.PROJECT_SHOW_SUCCESS,
    payload: data
  };
};
export const projectShowError = message => {
  return {
    type: actionTypes.PROJECT_SHOW_ERROR,
    payload: message
  };
};
export const projectUpdateRequest = () => {
  return {
    type: actionTypes.PROJECT_UPDATE_REQUEST
  };
};
export const projectUpdateSuccess = data => {
  return {
    type: actionTypes.PROJECT_UPDATE_SUCCESS,
    payload: data
  };
};
export const projectUpdateError = message => {
  return {
    type: actionTypes.PROJECT_UPDATE_ERROR,
    payload: message
  };
};
export const projectDeleteRequest = () => {
  return {
    type: actionTypes.PROJECT_DELETE_REQUEST
  };
};
export const projectDeleteSuccess = data => {
  return {
    type: actionTypes.PROJECT_DELETE_SUCCESS,
    payload: data
  };
};
export const projectDeleteError = message => {
  return {
    type: actionTypes.PROJECT_DELETE_ERROR,
    payload: message
  };
};
// Custom Function starts ====================>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
export const showAllProject = () => {
  return dispatch => {
    dispatch(projectListRequest());
    projectListApi().then(res => {
      if (res && res.online && res.online === false) {
        // dispatch(networkError());
      } else {
        if (res.status === 200) return dispatch(projectListSuccess(res.data));
        if (res.status === 400)
          return dispatch(projectListError(res.err.message));
        if (res.status === 401)
          return dispatch(projectListError(res.err.message));
        if (res.status === 409)
          return dispatch(projectListError(res.err.message));
      }
    });
  };
};
export const addNewProject = data => {
  return dispatch => {
    dispatch(addProjectRequest());
    addProjectApi(data).then(res => {
      if (res && res.online && res.online === false) {
        // dispatch(networkError());
        toastr.warning("Network Error", "Server is Down");
      }
      if (res.status === 200) return dispatch(addProjectSuccess());
      if (res.status === 400) return dispatch(addProjectError());
      if (res.status === 401) return dispatch(addProjectError());
      if (res.status === 409) return dispatch(addProjectError());
    });
  };
};

export const projectShow = id => {
  return dispatch => {
    dispatch(projectShowRequest);
    projectShowApi().then(res => {
      if (res && res.online && res.online === false) {
        toastr.warning("Network Error", "Server is Down");
      } else {
        if (res.status === 200) return dispatch(projectShowSuccess(res.data));
        if (res.status === 400)
          return dispatch(projectShowError(res.data.message));
        if (res.status === 401)
          return dispatch(projectShowError(res.data.message));
        if (res.status === 409)
          return dispatch(projectShowError(res.data.message));
      }
    });
  };
};

export const projectUpdate = (id, data) => {
  return dispatch => {
    dispatch(projectUpdateRequest());
    projectUpdateApi(id, data).then(res => {
      if (res && res.online && res.online === false) {
        toastr.warning("Network Error", "Server is Down");
      } else {
        if (res.status === 200) return dispatch(projectUpdateSuccess(res.data));
        if (res.status === 400)
          return dispatch(projectUpdateError(res.data.message));
        if (res.status === 401)
          return dispatch(projectUpdateError(res.data.message));
        if (res.status === 409)
          return dispatch(projectUpdateError(res.data.message));
      }
    });
  };
};

export const projectDelete = id => {
  return dispatch => {
    dispatch(projectDeleteRequest());
    projectDeleteApi(id).then(res => {
      if (res && res.online && res.online === false) {
        toastr.warning("Network Error", "Server is Down");
      } else {
        if (res.status === 200) return dispatch(projectDeleteSuccess());
        if (res.status === 400)
          return dispatch(projectDeleteError(res.data.message));
        if (res.status === 401)
          return dispatch(projectDeleteError(res.data.message));
        if (res.status === 409)
          return dispatch(projectDeleteError(res.data.message));
      }
    });
  };
};
