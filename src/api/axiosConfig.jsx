import axios from "axios";
import { API_URL, AUTHTOKEN, AUTHORIZATION_HEADER } from "inc/config";
import _ from "lodash";
const fetchClient = () => {
  let instance = axios.create({
    baseURL: API_URL,
    validateStatus: status => {
      return (
        (status >= 200 && status <= 204) ||
        status === 401 ||
        status === 400 ||
        status === 409
      );
    }
  });
  instance.interceptors.request.use(config => {
    const token = localStorage.getItem(AUTHTOKEN);

    if (!_.isEmpty(token)) {
      config.headers[AUTHORIZATION_HEADER] = token;
    }
    return config;
  });
  instance.interceptors.response.use(response => {
    try {
      if (response.data[AUTHTOKEN]) {
        const token = response.data[AUTHTOKEN];
        localStorage.setItem(AUTHTOKEN, token);
      }
      return response;
    } catch (err) {
      console.log("Error in axiosConfig", err);
    }
  });
  return instance;
};
export default fetchClient();
