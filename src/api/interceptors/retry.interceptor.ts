// src/api/interceptors/retry.interceptor.ts

import { AxiosError } from "axios";
import client from "../client";
import { apiConfig } from "../config";

// Methods that are safe to retry (idempotent)
const IDEMPOTENT_METHODS = ["GET", "PUT", "DELETE", "HEAD"];

// Attach retry interceptor
client.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error: AxiosError) => {
    const config = error.config as any;

    // Initialize retry count on first attempt
    if (!config.retryCount) {
      config.retryCount = 0;
    }

    // Skip retry if:
    // 1. Already retried max times
    // 2. Method is not idempotent (POST, PATCH not retried by default)
    // 3. Status code indicates client error (4xx), not network/server error
    if (
      config.retryCount >= apiConfig.maxRetryAttempts ||
      !IDEMPOTENT_METHODS.includes(config.method?.toUpperCase()) ||
      (error.response &&
        error.response.status < 500 &&
        error.response.status >= 400)
    ) {
      return Promise.reject(error);
    }

    config.retryCount++;

    // Exponential backoff: 1s, 2s, 4s
    const delayMs = apiConfig.retryDelay * Math.pow(2, config.retryCount - 1);

    console.log(
      `🔄 [RETRY ${config.retryCount}/${apiConfig.maxRetryAttempts}] ${config.method?.toUpperCase()} ${config.url} - waiting ${delayMs}ms`,
    );

    // Wait before retrying
    await new Promise((resolve) => setTimeout(resolve, delayMs));

    // Retry the request
    return client(config);
  },
);

export default client;
