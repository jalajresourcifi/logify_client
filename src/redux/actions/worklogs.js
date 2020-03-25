import * as actionTypes from "redux/actions/actionTypes";
import {
  worklogsListApi,
  worklogsAddApi,
  worklogsShowApi,
  worklogsUpdateApi,
  worklogsDeleteApi
} from "api/worklogs";
export const worklogsAddRequest = () => {
  return {
    type: actionTypes.WORKLOGS_ADD_REQUEST,
    payload: []
  };
};
export const worklogsAddSuccess = () => {
  return {
    type: actionTypes.WORKLOGS_ADD_SUCCESS,
    payload: []
  };
};
export const worklogsAddError = message => {
  return {
    type: actionTypes.WORKLOGS_ADD_ERROR,
    payload: message
  };
};
export const worklogsListRequest = () => {
  return {
    type: actionTypes.WORKLOGS_LIST_REQUEST,
    payload: []
  };
};
export const worklogsListSuccess = data => {
  return {
    type: actionTypes.WORKLOGS_LIST_SUCCESS,
    payload: data
  };
};
export const worklogsListError = () => {
  return {
    type: actionTypes.WORKLOGS_LIST_ERROR,
    payload: []
  };
};
export const worklogsShowRequest = () => {
  return {
    type: actionTypes.WORKLOGS_SHOW_REQUEST,
    payload: []
  };
};
export const worklogsShowSuccess = data => {
  return {
    type: actionTypes.WORKLOGS_SHOW_SUCCESS,
    payload: data
  };
};
export const worklogsShowError = message => {
  return {
    type: actionTypes.WORKLOGS_SHOW_ERROR,
    payload: message
  };
};
export const worklogsUpdateRequest = () => {
  return {
    type: actionTypes.WORKLOGS_UPDATE_REQUEST,
    payload: []
  };
};
export const worklogsUpdateSuccess = () => {
  return {
    type: actionTypes.WORKLOGS_UPDATE_SUCCESS,
    payload: []
  };
};
export const worklogsUpdateError = message => {
  return {
    type: actionTypes.WORKLOGS_UPDATE_ERROR,
    payload: message
  };
};
export const worklogsDeleteRequest = () => {
  return {
    type: actionTypes.WORKLOGS_DELETE_REQUEST,
    payload: []
  };
};
export const worklogsDeleteSuccess = () => {
  return {
    type: actionTypes.WORKLOGS_DELETE_SUCCESS,
    payload: []
  };
};
export const worklogsDeleteError = message => {
  return {
    type: actionTypes.WORKLOGS_DELETE_ERROR,
    payload: message
  };
};
// custom functions start =============================>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
export const worklogsList = () => {
  return dispatch => {
    dispatch(worklogsListRequest());
    worklogsListApi().then(res => {
      if (res && res.online && res.online === false) {
      } else {
        if (res.status === 200) return dispatch(worklogsListSuccess(res.data));
        if (res.status === 400)
          return dispatch(worklogsListError(res.data.message));
        if (res.status === 401)
          return dispatch(worklogsListError(res.data.message));
        if (res.status === 409)
          return dispatch(worklogsListError(res.data.message));
      }
    });
  };
};
export const worklogsAdd = data => {
  return dispatch => {
    dispatch(worklogsAddRequest());
    worklogsAddApi(data).then(res => {
      if (res && res.online && res.online === false) {
      } else {
        if (res.status === 200) return dispatch(worklogsAddSuccess());
        if (res.status === 400)
          return dispatch(worklogsAddError(res.data.message));
        if (res.status === 401)
          return dispatch(worklogsAddError(res.data.message));
        if (res.status === 409)
          return dispatch(worklogsAddError(res.data.message));
      }
    });
  };
};
export const worklogsShow = id => {
  return dispatch => {
    dispatch(worklogsShowRequest());
    worklogsShowApi(id).then(res => {
      if (res && res.online && res.online === false) {
      } else {
        if (res.status === 200) return dispatch(worklogsShowSuccess(res.data));
        if (res.status === 400)
          return dispatch(worklogsShowError(res.data.message));
        if (res.status === 401)
          return dispatch(worklogsShowError(res.data.message));
        if (res.status === 409)
          return dispatch(worklogsShowError(res.data.message));
      }
    });
  };
};
export const worklogsUpdate = (id, data) => {
  return dispatch => {
    dispatch(worklogsUpdateRequest());
    worklogsUpdateApi(id, data).then(res => {
      if (res && res.online && res.online === false) {
      } else {
        if (res.status === 200) return dispatch(worklogsUpdateSuccess());
        if (res.status === 400)
          return dispatch(worklogsUpdateError(res.data.message));
        if (res.status === 401)
          return dispatch(worklogsUpdateError(res.data.message));
        if (res.status === 409)
          return dispatch(worklogsUpdateError(res.data.message));
      }
    });
  };
};
export const worklogsDelete = id => {
  return dispatch => {
    dispatch(worklogsDeleteRequest());
    worklogsDeleteApi(id).then(res => {
      if (res && res.online && res.online === false) {
      } else {
        if (res.status === 200) return dispatch(worklogsDeleteSuccess());
        if (res.status === 400)
          return dispatch(worklogsDeleteError(res.data.message));
        if (res.status === 401)
          return dispatch(worklogsDeleteError(res.data.message));
        if (res.status === 409)
          return dispatch(worklogsDeleteError(res.data.message));
      }
    });
  };
};
