import * as actionTypes from "redux/actions/actionTypes";
const initState = {
  done: false,
  isFetching: false,
  isFetched: false,
  error: false,
  message: "",
  list: []
};

const worklogsReducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.WORKLOGS_LIST_REQUEST:
      return {
        ...state,
        done: false,
        isFetching: true,
        isFetched: false,
        error: false,
        message: ""
      };
    case actionTypes.WORKLOGS_LIST_SUCCESS:
      return {
        ...state,
        done: true,
        isFetching: false,
        isFetched: true,
        list: action.payload
      };
    case actionTypes.WORKLOGS_LIST_ERROR:
      return {
        ...state,
        done: true,
        isFetching: false,
        isFetched: false,
        error: true,
        message: action.payload
      };
    case actionTypes.WORKLOGS_SHOW_REQUEST:
      return {
        ...state,
        done: false,
        isFetching: true,
        isFetched: false,
        error: false,
        message: ""
      };
    case actionTypes.WORKLOGS_SHOW_SUCCESS:
      return {
        ...state,
        done: true,
        isFetching: false,
        isFetched: true,
        list: action.payload
      };
    case actionTypes.WORKLOGS_SHOW_ERROR:
      return {
        ...state,
        done: true,
        isFetching: false,
        isFetched: false,
        error: true,
        message: action.payload
      };
    case actionTypes.WORKLOGS_ADD_REQUEST:
      return {
        ...state,
        done: false,
        isFetching: true,
        isFetched: false,
        error: false,
        message: ""
      };
    case actionTypes.WORKLOGS_ADD_SUCCESS:
      return {
        ...state,
        done: true,
        isFetching: false,
        isFetched: true
      };
    case actionTypes.WORKLOGS_ADD_ERROR:
      return {
        ...state,
        done: true,
        isFetching: false,
        isFetched: false,
        error: true,
        message: action.payload
      };
    case actionTypes.WORKLOGS_UPDATE_REQUEST:
      return {
        ...state,
        done: false,
        isFetching: true,
        isFetched: false,
        error: false,
        message: ""
      };
    case actionTypes.WORKLOGS_UPDATE_SUCCESS:
      return {
        ...state,
        done: true,
        isFetching: false,
        isFetched: true
      };
    case actionTypes.WORKLOGS_UPDATE_ERROR:
      return {
        ...state,
        done: true,
        isFetching: false,
        isFetched: false,
        error: true,
        message: action.payload
      };
    case actionTypes.WORKLOGS_DELETE_REQUEST:
      return {
        ...state,
        done: false,
        isFetching: true,
        isFetched: false,
        error: false,
        message: ""
      };
    case actionTypes.WORKLOGS_DELETE_SUCCESS:
      return {
        ...state,
        done: true,
        isFetching: false,
        isFetched: true
      };
    case actionTypes.WORKLOGS_DELETE_ERROR:
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
export default worklogsReducer;
