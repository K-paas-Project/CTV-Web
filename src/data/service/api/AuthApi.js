import {httpClient} from "../HttpClient";
import {LocalKeys} from "../../local/LocalClient";

export function login(userAccount, password) {
  return httpClient.post('/api/v1/login', {
    userAccount: userAccount,
    password: password
  });
}

export function join(userAccount, password, userName, organization) {
  return httpClient.post('/api/v1/join', {
    userAccount: userAccount,
    password: password,
    userName: userName,
    organization: organization
  });
}

export function refresh() {
  return httpClient.post('/api/v1/refresh', {
    refreshToken: localStorage.getItem(LocalKeys.refreshToken)
  });
}

export function getProfile() {
  return httpClient.get('/api/v1/profile');
}