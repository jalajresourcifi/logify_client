import * as actionTypes from "redux/actions/actionTypes";
const initState = {
  done: false,
  isFetching: false,
  isFetched: false,
  error: false,
  message: "",
  list: []
};

const projectReducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.PROJECT_ADD_REQUEST:
      return {
        ...state,
        done: false,
        isFetching: true,
        isFetched: false,
        error: false,
        message: ""
      };
    case actionTypes.PROJECT_ADD_SUCCESS:
      return {
        ...state,
        done: true,
        isFetching: false,
        isFetched: true
      };
    case actionTypes.PROJECT_ADD_ERROR:
      return {
        ...state,
        done: true,
        isFetching: false,
        isFetched: false,
        error: true,
        message: action.payload
      };
    case actionTypes.PROJECT_LIST_REQUEST:
      return {
        ...state,
        done: false,
        isFetching: true,
        isFetched: false,
        error: false,
        message: ""
      };
    case actionTypes.PROJECT_LIST_SUCCESS:
      return {
        ...state,
        done: true,
        isFetched: true,
        isFetching: false,
        list: action.payload
      };
    case actionTypes.PROJECT_LIST_ERROR:
      return {
        ...state,
        done: true,
        isFetched: false,
        isFetching: false,
        error: true,
        message: action.payload
      };
    case actionTypes.PROJECT_SHOW_REQUEST:
      return {
        ...state,
        done: false,
        isFetching: true,
        isFetched: false,
        error: false,
        message: ""
      };
    case actionTypes.PROJECT_SHOW_SUCCESS:
      return {
        ...state,
        done: true,
        isFetching: false,
        isFetched: true
      };
    case actionTypes.PROJECT_SHOW_ERROR:
      return {
        ...state,
        done: true,
        isFetching: false,
        isFetched: false,
        error: true,
        message: action.payload
      };
    case actionTypes.PROJECT_UPDATE_REQUEST:
      return {
        ...state,
        done: false,
        isFetching: true,
        isFetched: false,
        error: false,
        message: ""
      };
    case actionTypes.PROJECT_UPDATE_SUCCESS:
      return {
        ...state,
        done: true,
        isFetching: false,
        isFetched: true
      };
    case actionTypes.PROJECT_UPDATE_ERROR:
      return {
        ...state,
        done: true,
        isFetching: false,
        isFetched: false,
        error: true,
        message: action.payload
      };
    case actionTypes.PROJECT_DELETE_REQUEST:
      return {
        ...state,
        done: false,
        isFetching: true,
        isFetched: false,
        error: false,
        message: ""
      };
    case actionTypes.PROJECT_DELETE_SUCCESS:
      return {
        ...state,
        done: true,
        isFetching: false,
        isFetched: true
      };
    case actionTypes.PROJECT_DELETE_ERROR:
      return {
        ...state,
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
export default projectReducer;
