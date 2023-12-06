import axios from "axios";
import {LocalKeys} from "../local/LocalClient";
import jwt from 'jsonwebtoken';
import {refresh} from "./api/AuthApi";

export const httpClient = axios.create({
  baseURL: 'http://223.130.136.187:8080',
  timeout: 5000
});


httpClient.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem(LocalKeys.accessToken);
    const refreshToken = localStorage.getItem(LocalKeys.refreshToken);
    if (accessToken) {
      const decoded = jwt.decode(accessToken);
      const expirationTime = decoded.exp;
      const currentTime = Math.floor(Date.now() / 1000);
      console.log('httpClient -', expirationTime, currentTime);
      if (expirationTime < currentTime) {
        // refresh
        refresh()
          .then(i => {
            const {accessToken} = i.data.data;
            console.log(accessToken);
            localStorage.setItem(LocalKeys.accessToken, accessToken);
          });
      } else {
        config.headers.Authorization = `Bearer ${accessToken}`;
      }
    }
    return config;
  },
  (error) => Promise.reject(error)
);