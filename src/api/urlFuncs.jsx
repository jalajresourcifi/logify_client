import axios from "./axiosConfig";
export async function wrappedFetch(url, method, data, headers) {
  let config = {
    url,
    method,
    data
  };
  if (headers) config.headers = headers;
  try {
    return await axios(config);
  } catch (err) {
    console.log("This is the error", err);
    return { online: false, err };
  }
}
export async function wrappedGet(url, method) {
  let config = {
    url,
    method
  };
  try {
    return await axios(config);
  } catch (err) {
    return { online: false, err };
  }
}
