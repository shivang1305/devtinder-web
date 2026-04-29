const API_BASE_URL = import.meta.env.VITE_BACKEND_API_URL_LOCAL + "/api/v1";
const API_TIMEOUT = 10000; // 10 seconds
const MAX_RETRY_ATTEMPTS = 3;
const RETRY_DELAY = 2000; // 2 seconds

export const apiConfig = {
  baseURL: API_BASE_URL,
  timeout: API_TIMEOUT,
  maxRetryAttempts: MAX_RETRY_ATTEMPTS,
  retryDelay: RETRY_DELAY,
};
