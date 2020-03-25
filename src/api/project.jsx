import { wrappedFetch, wrappedGet } from "./urlFuncs";
import {
  ADD_PROJECT_URL,
  PROJECT_LIST_URL,
  PROJECT_SHOW_URL,
  PROJECT_UPDATE_URL,
  PROJECT_DELETE_URL
} from "inc/constants";

export const addProjectApi = data => {
  console.log("This should run", data);
  return wrappedFetch(ADD_PROJECT_URL, "POST", data);
};
export const projectListApi = () => {
  return wrappedGet(PROJECT_LIST_URL, "GET");
};
export const projectShowApi = id => {
  return wrappedGet(PROJECT_SHOW_URL + id, "GET");
};
export const projectUpdateApi = (id, data) => {
  return wrappedFetch(PROJECT_UPDATE_URL + "/" + id, "PUT", data);
};
export const projectDeleteApi = id => {
  return wrappedGet(PROJECT_DELETE_URL + id, "DELETE");
};
