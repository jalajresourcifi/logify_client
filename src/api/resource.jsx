import { wrappedGet, wrappedFetch } from "./urlFuncs";
import {
  ADD_RESOURCE_URL,
  RESOURCE_LIST_URL,
  RESOURCE_SHOW_URL,
  RESOURCE_UPDATE_URL,
  RESOURCE_DELETE_URL
} from "inc/constants";

export const addResourceApi = data => {
  return wrappedFetch(ADD_RESOURCE_URL, "POST", data);
};
export const resourceListApi = () => {
  return wrappedGet(RESOURCE_LIST_URL, "GET");
};
export const resourceShowApi = id => {
  return wrappedGet(RESOURCE_SHOW_URL + id, "GET");
};
export const resourceUpdateApi = (id, data) => {
  return wrappedFetch(RESOURCE_UPDATE_URL + "/" + id, "PUT", data);
};
export const resourceDeleteApi = id => {
  return wrappedGet(RESOURCE_DELETE_URL + id, "DELETE");
};
