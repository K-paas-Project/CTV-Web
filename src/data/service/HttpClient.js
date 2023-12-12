import axios from "axios";
import {LocalKeys} from "../local/LocalClient";
import { jwtDecode } from 'jwt-decode';
import {refresh} from "./api/AuthApi";

export const httpClient = axios.create({
  baseURL: 'http://223.130.136.187:8080/',
  // timeout: 10000,
  // withCredentials: true
});


httpClient.interceptors.request.use(
  (config) => {
    console.log('interceptor - url: ', config.url);
    console.log('interceptor - date: ',config.data);

    if (config.url === '/api/v1/join'
      || config.url === '/api/v1/login'
      || config.url === '/api/v1/refresh') {
      console.log(`interceptor - passed-url: ${config.url}`);
      return config;
    }

    const accessToken = localStorage.getItem(LocalKeys.accessToken);
    const refreshToken = localStorage.getItem(LocalKeys.refreshToken);

    if (accessToken) {
      const decoded = jwtDecode(accessToken);
      const expirationTime = decoded.exp;
      const currentTime = Math.floor(Date.now() / 1000);
      console.log('httpClient -', expirationTime, currentTime);
      if (expirationTime < currentTime) {
        // refresh
        refresh(refreshToken)
          .then(i => {
            const {accessToken} = i.data.data;
            console.log(accessToken);
            localStorage.setItem(LocalKeys.accessToken, accessToken);
            config.headers.Authorization = `Bearer ${accessToken}`;
          });
      } else {
        config.headers.Authorization = `Bearer ${accessToken}`;
      }
    }
    return config;
  },
  (error) => Promise.reject(error)
);