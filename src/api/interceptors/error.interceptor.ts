import { AxiosError, type AxiosResponse } from "axios";
import client from "../client";

export interface ApiErrorResponse {
  message: string;
  statusCode: number;
  isNetworkError?: boolean;
  originalError?: any;
}

client.interceptors.response.use(
  (response: AxiosResponse) => response,
  (error: AxiosError) => {
    // Check if the error is a network error (no response received)
    if (!error.response) {
      const normalisedError: ApiErrorResponse = {
        message:
          error.message ||
          "Network error: Unable to reach the server. Please check your internet connection.",
        statusCode: 0,
        isNetworkError: true,
        originalError: error.toJSON(),
      };
      console.error("🌐 [NETWORK ERROR]", normalisedError);
      return Promise.reject(normalisedError);
    }

    // HTTP error (server responded with error status)
    const { status, data } = error.response;

    // Normalize error message based on backend response format
    // Adjust based on your backend's actual response format
    const message =
      (data as any)?.message ||
      (data as any)?.error ||
      (data as any)?.msg ||
      error.message ||
      "An error occurred. Please try again.";

    const normalizedError: ApiErrorResponse = {
      message,
      statusCode: status,
      isNetworkError: false,
      originalError: error,
    };

    console.error(`❌ [HTTP ERROR ${status}]`, normalizedError);

    return Promise.reject(normalizedError);
  },
);

export default client;
