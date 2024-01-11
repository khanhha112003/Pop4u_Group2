import axios from "axios";
import qs from "qs";
export let BASE_URL = "http://localhost:8000/api";

function getHeaders(isCors) {
  var headers = {
    "Content-Type": "application/json",
  };

  if (isCors) {
    headers["Access-Control-Allow-Origin"] = "*";
    headers["Access-Control-Allow-Methods"] = "GET, POST, PUT, DELETE, OPTIONS";
  }
  return { headers: headers };
}


export function basicGetRequets(url, urlParams, isCors = true) {
    let endpoint = BASE_URL + url;
    return axios.get(endpoint, {
        params: urlParams,
        paramsSerializer: params => {
          return qs.stringify(params)
        }
        }, getHeaders(isCors)
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
    return axios.post(endpoint, data, getHeaders(true));
}

export function authAdminValidateRequest(token) {
  let endpoint = BASE_URL + "/auth/admin_validate";
  const new_token = 'Bearer ' + token;
  var basicHeader = getHeaders(true);
  basicHeader.headers['Authorization'] = new_token;
  console.log(basicHeader);
  return axios.get(endpoint, basicHeader);
}

export function authPostRequest(url, data, token) {
  let endpoint = BASE_URL + url;
  var basicHeader = getHeaders(true);
  return axios.post(endpoint, data, { headers:  {...basicHeader.headers, Authorization: token} });
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