import getToken from "@/helper/getToken";

import axios from "axios";
import handleRequestError from "./handleRequestError";

export const api = axios.create({
  baseURL: import.meta.env.PROD
    ? import.meta.env.VITE_BASE_URL
    : import.meta.env.VITE_BASE_URL,
});

export const auth = axios.create({
  baseURL: import.meta.env.PROD
    ? import.meta.env.VITE_BASE_URL
    : import.meta.env.VITE_BASE_URL,
});

api.interceptors.request.use(function (config) {
  const { access_token, token_type } = getToken();

  config.headers.Authorization = `${String(token_type)} ${String(
    access_token
  )}`;

  return config;
});

api.interceptors.response.use(
  (res) => {
    return res;
  },
  (err) => {
    handleRequestError(err);
    return Promise.reject(err);
  }
);

auth.interceptors.response.use(
  (res) => {
    return res;
  },
  (err) => {
    handleRequestError(err);
    return Promise.reject(err);
  }
);
