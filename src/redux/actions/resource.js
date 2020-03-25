import * as actionTypes from "./actionTypes";
import {
  addResourceApi,
  resourceListApi,
  resourceUpdateApi,
  resourceDeleteApi
} from "api/resource";
import { toastr } from "react-redux-toastr";
import {} from "api/resource";
import { resourceShowApi } from "api/resource";
export const addResourceRequest = () => {
  return {
    type: actionTypes.RESOURCE_ADD_REQUEST
  };
};
export const addResourceSuccess = () => {
  return {
    type: actionTypes.RESOURCE_ADD_SUCCESS
  };
};
export const addResourceError = message => {
  return {
    type: actionTypes.RESOURCE_ADD_ERROR,
    payload: message
  };
};
export const resourceListRequest = () => {
  return {
    type: actionTypes.RESOURCE_LIST_REQUEST
  };
};
export const resourceListSuccess = data => {
  return {
    type: actionTypes.RESOURCE_LIST_SUCCESS,
    payload: data
  };
};
export const resourceListError = message => {
  return {
    type: actionTypes.RESOURCE_LIST_ERROR,
    payload: message
  };
};
export const resourceShowRequest = () => {
  return {
    type: actionTypes.RESOURCE_SHOW_REQUEST
  };
};
export const resourceShowSuccess = data => {
  return {
    type: actionTypes.RESOURCE_SHOW_SUCCESS,
    payload: data
  };
};
export const resourceShowError = message => {
  return {
    type: actionTypes.RESOURCE_SHOW_ERROR,
    payload: message
  };
};

export const resourceUpdateRequest = () => {
  return {
    type: actionTypes.RESOURCE_UPDATE_REQUEST
  };
};
export const resourceUpdateSuccess = () => {
  return {
    type: actionTypes.RESOURCE_UPDATE_SUCCESS,
    payload: []
  };
};
export const resourceUpdateError = message => {
  return {
    type: actionTypes.RESOURCE_UPDATE_ERROR,
    payload: message
  };
};
export const resourceDeleteRequest = () => {
  return {
    type: actionTypes.RESOURCE_DELETE_REQUEST
  };
};
export const resourceDeleteSuccess = () => {
  return {
    type: actionTypes.RESOURCE_DELETE_SUCCESS,
    payload: []
  };
};
export const resourceDeleteError = message => {
  return {
    type: actionTypes.RESOURCE_DELETE_ERROR,
    payload: message
  };
};
//Custom Functions Start ==============================>>>>>>>>>>>>>>>>>>>>>>>>>>>>
export const addResource = data => {
  return dispatch => {
    dispatch(addResourceRequest());
    addResourceApi(data).then(res => {
      if (res && res.online && res.online === false) {
        toastr.warning("Network Error", "Server is Down");
      } else {
        if (res.status === 200) return dispatch(addResourceSuccess());
        if (res.status === 400)
          return dispatch(addResourceError(res.data.message));
        if (res.status === 401)
          return dispatch(addResourceError(res.data.message));
        if (res.status === 409)
          return dispatch(addResourceError(res.data.message));
      }
    });
  };
};
export const resourceList = () => {
  return dispatch => {
    dispatch(resourceListRequest());
    resourceListApi().then(res => {
      if (res && res.online && res.online === false) {
        toastr.warning("Network Error", "Server is Down");
      } else {
        if (res.status === 200) return dispatch(resourceListSuccess(res.data));
        if (res.status === 400)
          return dispatch(resourceListError(res.data.message));
        if (res.status === 401)
          return dispatch(resourceListError(res.data.message));
        if (res.status === 409)
          return dispatch(resourceListError(res.data.message));
      }
    });
  };
};
export const resourceShow = id => {
  return dispatch => {
    dispatch(resourceShowRequest());
    resourceShowApi(id).then(res => {
      if (res && res.online && res.online === false) {
        toastr.warning("Network Error", "Server is Down");
      } else {
        if (res.status === 200) return dispatch(resourceShowSuccess(res.data));
        if (res.status === 400)
          return dispatch(resourceShowError(res.data.message));
        if (res.status === 401)
          return dispatch(resourceShowError(res.data.message));
        if (res.status === 409)
          return dispatch(resourceShowError(res.data.message));
      }
    });
  };
};
export const resourceUpdate = (id, data) => {
  return dispatch => {
    dispatch(resourceUpdateRequest());
    resourceUpdateApi(id, data).then(res => {
      if (res && res.online && res.online === false) {
        toastr.warning("Network Error", "Server is Down");
      } else {
        if (res.status === 200)
          return dispatch(resourceUpdateSuccess(res.data));
        if (res.status === 400)
          return dispatch(resourceUpdateError(res.data.message));
        if (res.status === 401)
          return dispatch(resourceUpdateError(res.data.message));
        if (res.status === 409)
          return dispatch(resourceUpdateError(res.data.message));
      }
    });
  };
};
export const resourceDelete = id => {
  return dispatch => {
    dispatch(resourceDeleteRequest());
    resourceDeleteApi(id).then(res => {
      if (res && res.online && res.online === false) {
        toastr.warning("Network Error", "Server is Down");
      } else {
        if (res.status === 200)
          return dispatch(resourceDeleteSuccess(res.data));
        if (res.status === 400)
          return dispatch(resourceDeleteError(res.data.message));
        if (res.status === 401)
          return dispatch(resourceDeleteError(res.data.message));
        if (res.status === 409)
          return dispatch(resourceDeleteError(res.data.message));
      }
    });
  };
};
