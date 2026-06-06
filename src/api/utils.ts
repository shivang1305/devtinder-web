// src/api/utils.ts

import type { AxiosResponse } from "axios";
import type { ApiResponse, ApiError } from "./types.ts";

/**
 * Unwrap API response data
 * Most endpoints return { success: true, data: {...} }
 * This extracts just the data part
 *
 * @param response - Full Axios response
 * @returns Just the data (unwrapped from ApiResponse wrapper)
 *
 * @example
 * const response = await client.post('/auth/login', {...});
 * const user = unwrapResponse(response); // Gets response.data.data
 */
export const unwrapResponse = <T>(
  response: AxiosResponse<ApiResponse<T>>,
): T => {
  if (!response.data.data) {
    throw new Error("Invalid response format: missing data field");
  }
  return response.data.data;
};

/**
 * Handle API errors gracefully
 * Converts any error to standardized ApiError format
 * (This should match what error.interceptor.ts produces)
 *
 * @param error - The error object (could be axios error, ApiError, or any unknown error)
 * @returns Standardized ApiError
 *
 * @example
 * try {
 *   await login(credentials);
 * } catch (error) {
 *   const apiError = handleApiError(error);
 *   console.error(apiError.message); // Type-safe error message
 * }
 */
export const handleApiError = (error: unknown): ApiError => {
  // Already normalized by error interceptor
  if (
    error &&
    typeof error === "object" &&
    "message" in error &&
    "statusCode" in error
  ) {
    return error as ApiError;
  }

  // Fallback for unexpected error format
  return {
    message:
      error instanceof Error ? error.message : "An unexpected error occurred",
    statusCode: 0,
    isNetworkError: true,
    originalError: error,
  };
};

/**
 * Check if error is a network error
 * Network errors have no HTTP response (timeout, offline, DNS failure)
 *
 * @param error - The error object
 * @returns true if network error, false if HTTP error
 *
 * @example
 * try {
 *   await api.call();
 * } catch (error) {
 *   if (isNetworkError(error)) {
 *     showToast('Check your internet connection');
 *   } else {
 *     showToast('Server error');
 *   }
 * }
 */
export const isNetworkError = (error: unknown): boolean => {
  if (error && typeof error === "object" && "isNetworkError" in error) {
    return (error as ApiError).isNetworkError;
  }
  return false;
};

/**
 * Check if error is unauthorized (401)
 * Used to determine if user should be logged out
 *
 * @param error - The error object
 * @returns true if 401 error
 *
 * @example
 * if (isUnauthorizedError(error)) {
 *   // Redirect to login (usually done by auth interceptor)
 *   // But you can use this for additional logic
 * }
 */
export const isUnauthorizedError = (error: unknown): boolean => {
  if (error && typeof error === "object" && "statusCode" in error) {
    return (error as ApiError).statusCode === 401;
  }
  return false;
};

/**
 * Check if error is forbidden (403)
 * Used to determine if user lacks permission
 *
 * @param error - The error object
 * @returns true if 403 error
 */
export const isForbiddenError = (error: unknown): boolean => {
  if (error && typeof error === "object" && "statusCode" in error) {
    return (error as ApiError).statusCode === 403;
  }
  return false;
};

/**
 * Check if error is validation error (400)
 * Backend returns field-level errors for form validation
 *
 * @param error - The error object
 * @returns true if 400 error
 *
 * @example
 * if (isValidationError(error)) {
 *   // Show field-level error messages
 *   // Backend might return { errors: { email: "Already exists" } }
 * }
 */
export const isValidationError = (error: unknown): boolean => {
  if (error && typeof error === "object" && "statusCode" in error) {
    return (error as ApiError).statusCode === 400;
  }
  return false;
};

/**
 * Get user-friendly error message
 * Converts technical errors to simple messages for UI
 *
 * @param error - The error object
 * @returns User-friendly error message
 *
 * @example
 * try {
 *   await login(credentials);
 * } catch (error) {
 *   const message = getUserFriendlyErrorMessage(error);
 *   showToast(message); // Shows "Please check your internet connection"
 * }
 */
export const getUserFriendlyErrorMessage = (error: unknown): string => {
  if (!error) return "An error occurred. Please try again.";

  if (typeof error === "object" && "message" in error) {
    const apiError = error as ApiError;

    // Network errors
    if (apiError.isNetworkError) {
      return "Network error. Please check your internet connection.";
    }

    // HTTP errors
    switch (apiError.statusCode) {
      case 400:
        return "Invalid request. Please check your input.";
      case 401:
        return "Session expired. Please login again.";
      case 403:
        return "You do not have permission to perform this action.";
      case 404:
        return "Resource not found.";
      case 409:
        return "This resource already exists.";
      case 429:
        return "Too many requests. Please try again later.";
      case 500:
        return "Server error. Please try again later.";
      case 503:
        return "Service is temporarily unavailable.";
      default:
        return apiError.message || "An error occurred. Please try again.";
    }
  }

  return error instanceof Error
    ? error.message
    : "An unexpected error occurred.";
};
