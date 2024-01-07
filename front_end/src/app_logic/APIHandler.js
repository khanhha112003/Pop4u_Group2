import axios from "axios";
import { getToken } from "./Authenticate";
import qs from "qs";
export let BASE_URL = "http://localhost:8000/api";

function getHeaders() {
  const token = getToken();
  if (!token) return {
    headers: {
      "Content-Type": "application/json",
    },
  };
  return {
    headers: {
      "Content-Type": "application/json",
      Authorization: `${token}`,
    },
  };
}

export function basicGetRequets(url, urlParams) {
    let endpoint = BASE_URL + url;
    return axios.get(endpoint, {
        params: urlParams,
        paramsSerializer: params => {
          return qs.stringify(params)
        }
        }, getHeaders()
    );
}

export function loginPostRequest(url, username, password) {
    let endpoint = BASE_URL + url;
    return axios.post(
      endpoint, 
      {
        username: username,
        password: password
      }, 
      {headers: {'content-type': 'application/x-www-form-urlencoded'}}
    );
}

export function basicPostRequest(url, data) {
    let endpoint = BASE_URL + url;
    return axios.post(endpoint, data, getHeaders());
}

export function basicPutRequest(url, data) {
    let endpoint = BASE_URL + url;
    return axios.put(endpoint, data, getHeaders());
}

export function basicDeleteRequest(url) {
    let endpoint = BASE_URL + url;
    return axios.delete(endpoint, getHeaders());
}

export function combineMultipleRequests(requests) {
    return axios.all(requests);
}