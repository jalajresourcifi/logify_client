import { wrappedGet, wrappedFetch } from "./urlFuncs";
import {
  WORKLOGS_LIST_URL,
  WORKLOGS_SHOW_URL,
  WORKLOGS_ADD_URL,
  WORKLOGS_UPDATE_URL,
  WORKLOGS_DELETE_URL
} from "inc/constants";
export const worklogsAddApi = data => {
  return wrappedFetch(WORKLOGS_ADD_URL, "POST", data);
};
export const worklogsListApi = () => {
  return wrappedGet(WORKLOGS_LIST_URL, "GET");
};
export const worklogsShowApi = id => {
  return wrappedGet(WORKLOGS_SHOW_URL + "/" + id, "GET");
};

export const worklogsUpdateApi = (id, data) => {
  return wrappedFetch(WORKLOGS_UPDATE_URL + "/" + id, "PUT", data);
};

export const worklogsDeleteApi = id => {
  return wrappedGet(WORKLOGS_DELETE_URL + "/" + id, "DELETE");
};
