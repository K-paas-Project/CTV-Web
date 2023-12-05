import {httpClient} from "../HttpClient";

export function login(userAccount, password) {
  return httpClient.post('/api/v1/login', {
    userAccount,
    password
  });
}

export function join(userAccount, password, userName, organization) {
  return httpClient.post('/api/v1/join', {
    userAccount,
    password,
    userName,
    organization
  });
}