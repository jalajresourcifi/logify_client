import * as actionTypes from "redux/actions/actionTypes";
const initState = {
  done: false,
  isFetching: false,
  isFetched: false,
  error: false,
  message: "",
  list: []
};

const resourceReducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.RESOURCE_ADD_REQUEST:
      return {
        ...state,
        done: false,
        isFetched: false,
        isFetching: true,
        error: false,
        message: ""
      };
    case actionTypes.RESOURCE_ADD_SUCCESS:
      return {
        ...state,
        done: true,
        isFetching: false,
        isFetched: true
      };
    case actionTypes.RESOURCE_ADD_ERROR:
      return {
        ...state,
        done: true,
        isFetching: false,
        isFetched: false,
        error: true,
        message: action.payload
      };
    case actionTypes.RESOURCE_LIST_REQUEST:
      return {
        ...state,
        done: false,
        isFetched: false,
        isFetching: true,
        error: false,
        message: ""
      };
    case actionTypes.RESOURCE_LIST_SUCCESS:
      return {
        ...state,
        done: true,
        isFetching: false,
        isFetched: true,
        list: action.payload
      };
    case actionTypes.RESOURCE_LIST_ERROR:
      return {
        ...state,
        done: true,
        isFetching: false,
        isFetched: false,
        error: true,
        message: action.payload
      };
    case actionTypes.RESOURCE_SHOW_REQUEST:
      return {
        ...state,
        done: false,
        isFetching: true,
        isFetched: false,
        error: false,
        message: ""
      };
    case actionTypes.RESOURCE_SHOW_SUCCESS:
      return {
        ...state,
        done: true,
        isFetching: false,
        isFetched: true,
        list: action.payload
      };
    case actionTypes.RESOURCE_SHOW_ERROR:
      return {
        ...state,
        done: true,
        isFetching: false,
        isFetched: false,
        error: true,
        message: action.payload
      };
    case actionTypes.RESOURCE_UPDATE_REQUEST:
      return {
        ...state,
        done: false,
        isFething: true,
        isFetched: false,
        error: false,
        message: ""
      };
    case actionTypes.RESOURCE_UPDATE_SUCCESS:
      return {
        ...state,
        done: true,
        isFetching: false,
        isFetched: true
      };
    case actionTypes.RESOURCE_UPDATE_ERROR:
      return {
        ...state,
        done: true,
        isFetching: false,
        isFetched: false,
        error: true,
        message: action.payload
      };
    case actionTypes.RESOURCE_DELETE_REQUEST:
      return {
        done: false,
        isFetching: true,
        isFetched: false,
        error: false,
        message: ""
      };
    case actionTypes.RESOURCE_DELETE_SUCCESS:
      return {
        done: true,
        isFetching: false,
        isFetched: true
      };
    case actionTypes.RESOURCE_DELETE_ERROR:
      return {
        done: true,
        isFetching: false,
        isFetched: false,
        error: true,
        message: action.payload
      };
    default:
      return state;
  }
};
export default resourceReducer;
