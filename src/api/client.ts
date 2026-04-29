import axios, { type AxiosInstance } from "axios";
import { apiConfig } from "./config";

// creating a centralized API client using Axios with configurations from apiConfig
const client: AxiosInstance = axios.create({
  baseURL: apiConfig.baseURL,
  timeout: apiConfig.timeout,
  withCredentials: true, // Include cookies in requests
  headers: {
    "Content-Type": "application/json",
  },
});

export default client;
